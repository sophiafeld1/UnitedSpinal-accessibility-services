"use client";

import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { stats } from "@/data/stats";

function parseStat(value: string): { target: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { target: 0, suffix: value };
  return { target: Number(match[1]), suffix: match[2] };
}

function StatFigure({ value, active }: { value: string; active: boolean }) {
  const { target, suffix } = parseStat(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setCurrent(target);
      return;
    }

    const duration = 1400;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setCurrent(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return (
    <>
      {current}
      {suffix}
    </>
  );
}

export default function StatBar() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let timer = 0;

    const visible = () => {
      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      // Wait until the whole row is on screen, so the count doesn't run
      // while the boxes are still cut off at the bottom of the viewport.
      const fullyVisible = rect.top >= 16 && rect.bottom <= viewHeight - 16;
      const fillsView = rect.height >= viewHeight && rect.top <= 16 && rect.bottom >= viewHeight - 16;
      return fullyVisible || fillsView;
    };

    const stop = () => {
      window.clearInterval(timer);
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };

    const check = () => {
      if (!visible()) return;
      setActive(true);
      stop();
    };

    check();
    timer = window.setInterval(check, 150);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => stop();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f4f4f4] py-8 md:py-10">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-[#e2e2e2] bg-white px-3 py-5 md:py-6 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold text-accent mb-1 tabular-nums">
                <StatFigure value={stat.value} active={active} />
              </p>
              <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
