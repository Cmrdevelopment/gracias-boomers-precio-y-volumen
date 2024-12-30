

const GraciasWeb = () => {
    
    const handleButtonTelegramClick = () => {
        window.open('https://t.me/+CouqgeZDsK43NGI0', '_blank');
      };
  const twitterURL = 'https://twitter.com/bison_trade';

    return (
        <>
        <div className="mb-6 bg-cover bg-center bg-no-repeat">
          <h1 className="mt-8 text-5xl font-extrabold text-black text-center sm:text-9xl">
          </h1>
          <img className="mb-4 mx-auto w-1/3 sm:w-1/6" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1702135035/Drive_logo_boomers_sin_fondo_aa2nkf.png" alt="logo Boomers" />
        </div>
        <section className="flex flex-col items-center sm:flex-row sm:justify-center">
          <h3 className="text-sm font-extrabold text-center mb-2 sm:mr-4 sm:mb-0 sm:text-lg">
            Patrocinado por:
          </h3>
          <a href={twitterURL} target="_blank" rel="noopener noreferrer">
            <img
              src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1694260187/BisonTrade_H_positivo_lineal_p1lu4k.png"
              alt="Logo Bison"
              className="w-48"
              style={{ cursor: 'pointer' }}
            />
          </a>            
        </section>
        <div className="flex justify-around">
        <div className="flex flex-col items-center m-5">
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701940868/Boomers/Drive_Jordi_sin_fondo_xxq0hq.png" alt="Foto Jordi" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727670/Boomers/Logo_Jordi_Trading_180_x_40_mxefav.png" alt="logo Jordi" />
          </div>
          <div className="flex flex-col items-center m-5">
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701995706/Boomers/Foto_cmrbolsa_dedo_campo_SIN_FONDO_rvysip.png" alt="foto Cmrbolsa" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701727730/Boomers/Logo_a_modificar-removebg-preview_kjo5ld.png" alt="logo cmrbolsa" />
          </div>
          <div className="flex flex-col items-center m-5">
          <img className="w-52 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1702131714/Foto_Miguel_mano_SIN_FONDO_pvedvp.png" alt="foto Miguel Ramirez"/>
          <img className="w-48 h-16 -my-4 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1702132498/Logo_lobo_Miguel_Ramirez_cerca-con_letras_ampliadas_c8tzx9.png" alt="logo Miguel Ramirez" />
          </div>
          <div className="flex flex-col items-center m-5">          
          <img className="w-48 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701940871/Boomers/Drive_David_sin_fondo_r2ignh.png" alt="foto David Leyguarda" />
          <img className="w-36 h-12 object-contain" src="https://res.cloudinary.com/dwbxywvdw/image/upload/v1701995794/Boomers/Logo_David_Leyguarda-removebg-preview_vrsbu3.png" alt="logo David Leyguarda" />
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center font-semibold">
            <h2 className="text-xl text-center font-extrabold mt-3">¡Gracias por inscribirte en Boomers Precio y Volumen de Madrid 2025!</h2>
            <p className="mt-9 ml-9 mr-9 text-justify sm:ml-96 sm:mr-96 text-neutral-500 font-bold" > El <span className="text-slate-700">evento Boomers Madrid Marzo 2025</span> podrás disfurtas de <span className="text-slate-700">4 talleres por parte de los boomers</span> y el mercado en vivo y en real, pero no solo será talleres de formación y ver el mercado en real el lunes sino que podremos <span className="text-slate-700">disfrutar de un fin de semana</span> con muchos <span className="text-slate-700">compañeros, profes y amigos</span> donde podremos charlar y compartir <span className="text-slate-700">nuestra pasión y dedicación.</span></p>
        </div>      

        <div className="LandingSaberMas_quieres_saber_mas ">
        <button className="LandingSaberMas_boton_quieres_saber_mas" onClick={handleButtonTelegramClick}>
        <div className="LandingSaberMas_texto ">
            <h1 className=" text-lg pb-2 font-bold">TELEGRAM PRIVADO para los participantes de BOOMERS MARZO 2025 MADRID</h1>
            <p>Entra en el <span className="font-bold">TELEGRAM PRIVADO</span> para el evento y estarás a la última de todo</p>
            <p className="p-2 ">Únete !!!</p>      
        </div>
        </button>
        </div>
        
        
        
      </>
    )
}

export default GraciasWeb;