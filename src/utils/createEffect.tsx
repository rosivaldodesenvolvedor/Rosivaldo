import React from "react"

export function createEffect(){
      document?.querySelectorAll(".max-w-xl").forEach((el) => {
    const element = el as HTMLElement; // ⭐ CORREÇÃO

    element.classList.add("fade-in");

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 200);
  });

  document.querySelectorAll(".relative").forEach((el) => {
    const element = el as HTMLElement; // ⭐ CORREÇÃO

    element.classList.add("fade-in-scale");

    setTimeout(() => {
      element.style.opacity = "1";
      element.style.transform = "scale(1)";
    }, 300);
  });
}