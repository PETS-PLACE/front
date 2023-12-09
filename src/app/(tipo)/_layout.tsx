// import { Tabs } from "expo-router";
// import { Feather } from "@expo/vector-icons"


// //Neste arquivo é definida as configurações de layout das tabs routes
// export default function TabRoutesLayout(){
//     return(
//         //As configurações definidas dentro da tag <Tabs/> será aplicada em todas as tabs
//         <Tabs screenOptions={{headerShown: false}}>

//             <Tabs.Screen
//                 //nome que fica no cabeçalho da screen
//                 name="index"
//                 //As configurações das tabs específicas são definidas dentro da propriedade options
//                 options={{
//                     //titulo que sera exibido na tabs de navegação
//                     title: "Início",
//                     tabBarIcon: () => <Feather name="home"/>
//                 }}
//             />

//             <Tabs.Screen
//                 name="about"
//                 options={{
//                     tabBarActiveTintColor:"red",
//                     title: "Sobre",
//                     tabBarIcon: ({color}) => <Feather name="settings" color={"red"}/>,
//                 }}
//             />

//         </Tabs>
//     )
// }