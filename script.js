gsap.from(".title", { duration: 1, y: -50, opacity: 0, ease: "power4.out" });

const svg = document.getElementById("trail-svg");

document.addEventListener("mousemove", (e) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", e.clientX);
    circle.setAttribute("cy", e.clientY);
    circle.setAttribute("r", 3); // Small radius for bubble effect
    circle.setAttribute("fill", "purple"); // Purple color
    svg.appendChild(circle);

    gsap.to(circle, {
        duration: 0.5, // Duration for fade out and scale
        opacity: 0,
        scale: 0, // Make it disappear by scaling down
        ease: "power1.out",
        onComplete: () => {
            circle.remove(); // Remove the circle from DOM after animation
        }
    });
});