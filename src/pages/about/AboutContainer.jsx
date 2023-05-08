const AboutContainer = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="text-center mb-[2em] md:mb-[4em]">
          <h1 className="text-[#333] text-4xl font-bold tracking-[-.04em] mb-[24px] md:text-5xl">
            Conoce más acerca de nosotros
          </h1>
          <p className="text-lg text-[#444] tracking-[-.02em] max-w-[897px] mx-auto md:text-xl md:leading-[1.6]">
            Somos una startup de la industria del bienestar, buscamos que las
            personas puedan tener una salud plena mas alla de lo farmacologico y
            buscando la prevencion que es lo primordial en la salud.
          </p>
        </div>

        <br />

        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(275px, 1fr))",
          }}
        >
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/about-1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/about-2.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/about-3.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section className="about">
    <div className="container">
      <h1 className="text-[#333] text-l font-bold tracking-[-.04em] mb-[12px] md:text-lg">
        Sobre nosotros.
      </h1>
      <p className="text-[#333] text-2xl font-bold tracking-[-.04em] mb-[24px] md:text-4xl">
        Buscamos que las personas puedan tener una salud plena mas alla de lo
        farmacologico
      </p>
      <p className="mb-[12px]">
        En Fisiomfulness nos enfocamos en ofrecer soluciones personalizadas para
        mejorar la calidad de vida de nuestros clientes. Creemos que la salud y
        el bienestar son fundamentales para llevar una vida plena y
        satisfactoria.
      </p>
      <p className="mb-[12px]">
        Nos apasiona ayudar a las personas a recuperar su bienestar y mejorar su
        calidad de vida, y por eso nos esforzamos por desarrollar soluciones de
        salud innovadoras y efectivas.
      </p>

      <img src="images/about.svg" alt="about-us"/>
    </div>
  </section>
);

export default About;
