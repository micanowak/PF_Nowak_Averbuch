import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";

import logoFirex from "../../assets/LogoFirex.png";
import ArgTeamLogo from "../../assets/ArgTeamLogo.png";
import CustomButton from "../components/LogInScreen/CustomButton";
import CustomInputBottom from "../components/LogInScreen/CustomInputBottom";
import CustomInputTop from "../components/LogInScreen/CustomInputTop";

const LogInScreen = (/*sendUsername, sendPassword*/) => {
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    /*const inicioSesion = (usuario) => {
        sendUsername(usuario.nombre);
        sendPassword(usuario.contrasenia);
    }*/
  
    return (
    <View>
      <Image
        source={logoFirex}
        style={[styles.logoFirexStyle, { height: height * 0.4 }]}
        resizeMode="contain"
      />
      <Image
        source={ArgTeamLogo}
        style={[styles.argTeam_Logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />

      <CustomInputTop
        value={username}
        setValue={setUsername}
        esTop={true}
        placeholder="Usuario"
        secureTextEntry={false}
      />
      <CustomInputBottom
        value={password}
        setValue={setPassword}
        esTop={false}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <CustomButton
        usuarioEnv={username}
        passwordEnv={password}
        //verificarUsuario={inicioSesion}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logoFirexStyle: {
    marginTop: "15%",
    maxWidth: 100,
    maxHeight: 75,
  },
  argTeam_Logo: {
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default LogInScreen;
