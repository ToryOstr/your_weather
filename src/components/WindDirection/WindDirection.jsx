import arrow from "../WeatherIcon/weatherIcon/arrow.png";

export default function WindDirection(deg) {
  let dynamicStyleImg = {
    width: "20px",
    height: "20px",
    transform: `rotate(${deg}deg)`,
  };

  if ((deg > 337.5 && deg <= 360) || (deg >= 0 && deg <= 22.5)) {
    return (
      <>
        <span style={{ marginRight: "10px" }}>North</span>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
      </>
    );
  }

  if (deg > 22.5 && deg <= 67.5) {
    return (
      <>
        <span style={{ marginRight: "10px" }}>North-East</span>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
      </>
    );
  }

  if (deg > 67.5 && deg <= 112.5) {
    return (
      <>
        <span style={{ marginRight: "10px" }}>East</span>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
      </>
    );
  }

  if (deg > 112.5 && deg <= 157.5) {
    return (
      <>
        <span style={{ marginRight: "10px" }}>South East</span>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
      </>
    );
  }

  if (deg > 157.5 && deg <= 202.5) {
    return (
      <>
        <span style={{ marginRight: "10px" }}>South</span>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
      </>
    );
  }

  if (deg > 202.5 && deg <= 247.5) {
    return (
      <>
        <span style={{ marginRight: "10px" }}>South-West</span>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
      </>
    );
  }

  if (deg > 247.5 && deg <= 292.5) {
    return (
      <>
        <span style={{ marginRight: "10px" }}>West</span>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
      </>
    );
  }

  if (deg > 292.5 && deg <= 337.5) {
    return (
      <>
        <span style={{ marginRight: "10px" }}>North-West</span>
        <img src={arrow} style={dynamicStyleImg} alt="wind direction" />
      </>
    );
  }
}
