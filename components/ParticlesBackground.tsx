import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      options={{
        background: {
          color: "transparent",
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 130,
            density: { enable: true },
          },

          color: {
            value: ["#6366f1", "#8b5cf6", "#a78bfa", "#ffffff"],
          },

          shape: {
            type: ["circle", "star"],
          },

          opacity: {
            value: {
              min: 0.2,
              max: 0.7,
            },
            animation: {
              enable: true,
              speed: 0.8,
              sync: false,
            },
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
            animation: {
              enable: true,
              speed: 2,
              sync: false,
            },
          },

          move: {
            enable: true,
            speed: 0.3,
            random: true,
            direction: "none",
            outModes: {
              default: "out",
            },
          },

          links: {
            enable: true,
            distance: 150,
            opacity: 0.25,
            width: 1,
            color: "#6366f1",
          },
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },

            onClick: {
              enable: true,
              mode: "push",
            },
          },

          modes: {
            grab: {
              distance: 180,
              links: {
                opacity: 0.5,
              },
            },

            push: {
              quantity: 5,
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;