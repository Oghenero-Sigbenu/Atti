import { Layout, Hero, Gallery } from "../../Components";
import ExecutivesRow from "../../Components/Landing/ExecutivesRow";
import { useRef } from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import Title from "../../Components/Common/Title";

function LandingPage({ baseVelocity = 10 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 500,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 5000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  // const x = useTransform(baseX, (v) => `${wrap(-40, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <Layout className="relative">
      <Hero />

      <div className="my-[4rem] mt-[6rem]">
        <Title
          text="text-primary"
          title="SAVE LIVES, SING THE WORLD"
          bg="bg"
          border="border-blue"
        />
        <div>
          <p className="text-center mt-[1rem] mx-auto md:w-[50%]">
            A non-profit organization aimed at touching the lives of individuals
            through providing good health,food and clothing. With us, the act of
            saving lives goes in the little care that you give.
          </p>
        </div>
      </div>
      <ExecutivesRow />
      <Gallery />
    </Layout>
  );
}

export default LandingPage;
