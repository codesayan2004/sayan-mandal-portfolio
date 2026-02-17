import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: "#0f172a" // change to match your theme
        },
        particles: {
          number: {
            value: 60
          },
          size: {
            value: 3
          },
          move: {
            enable: true,
            speed: 1
          },
          links: {
            enable: true,
            distance: 150,
            opacity: 0.3
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            },
            onClick: {
              enable: true,
              mode: "push"
            }
          },
          modes: {
            repulse: {
              distance: 100
            },
            push: {
              quantity: 4
            }
          }
        }
      }}
    />
  );
};

export default ParticlesBackground;
