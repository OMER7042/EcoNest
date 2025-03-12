import { Linking, Platform } from "react-native";

export const goToMaps = ({ latitude, longitude }) => {
  const scheme = Platform.select({ ios: "maps:0,0?q=", android: "geo:0,0?q=" });
  const latLng = `${latitude},${longitude}`;
  const label = "";
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}&dirflg=w&t=m`,
    android: `${scheme}${latLng}(${label})&dirflg=w&t=m`,
  });

  Linking.openURL(url);
};
export function calculateTreesPlanted(co2Kg) {
  // On average, one mature tree absorbs about 21.77 kg of CO2 per year
  const co2AbsorptionPerTree = 21.77 /12; 
  
  // Calculate the number of trees required
  const treesPlanted = co2Kg / co2AbsorptionPerTree;
  
  return Math.round(treesPlanted); // Rounding to nearest whole number
}
export const FONTS = {
  "4xl": {
    fontSize: 31.5,
    lineHeight: 35,
  },
  "3xl": {
    fontSize: 26.25,
    lineHeight: 31.5,
  },
  "2xl": {
    fontSize: 21,
    lineHeight: 28,
  },
  xl: {
    fontSize: 17.5,
    lineHeight: 24.5,
  },
  lg: {
    fontSize: 15.75,
    lineHeight: 24.5,
  },
  md: {
    fontSize: 14,
    lineHeight: 20,
  },
  sm: {
    fontSize: 12.25,
    lineHeight: 17.5,
  },
  xs: {
    fontSize: 10.5,
    lineHeight: 14,
  },
  len: 7,
};
