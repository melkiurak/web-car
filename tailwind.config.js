/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      width:{
        dashboard: "300px",
        Btn: "250px",
        marckCar: "450px",
        marckBtn: "80%",
        serios:"400px",
        account:"632px",
      },
      height:{
        dashboard: "80px",
      },
      maxHeight:{
        serios:"92vh"
      },
      gridTemplateColumns:{
        columsHome: "350px auto",
      },
      colors:{
        AgateGrey:"#C3C4C0",
        White:"#FDFDFD",
        PlatinumGray: "#818081",
        InputBlakc: "#010001",
        IconWhite: "#EFEFFF",
        WhiteGray: "#BCBEBE",
        RegisterInput: "#3f3b85",
        RegisterInputFocus: "#524dac",
      },
      backgroundColor:{
        BlueKryola:"#4940FF",
        Nightblue:"#25234D",
        BlueKryola:"#4940FF",
        Blue:"#1206ff",
        SeriosBlack:"#141236",
      },
      backgroundSize:{
        SizeBtn:"300% 100%",
      },
      backgroundPosition:{
        PositionBtn: "100% 0"
      },
      transitionDelay:{
        myDelay: "0.2s",
      },
      borderColor:{
        boreder:"#524dac",
        inputBorder:"#474396",
      }
    },
  },
  plugins: [],
}

