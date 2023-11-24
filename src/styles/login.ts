import StyleSheet from 'react-native-media-query';

const {styles} = StyleSheet.create(
    {
      conatainer:{
        flex: 1,
        alignItems: "center",
        justifyContent:'center',
        backgroundColor: '#EBEFEF',
      },
  
      form:{
        display: 'flex',
        width: '80%',
        backgroundColor: '#FFFFFF',
        boxShadow: "2px 4px 2px #D8D8D8",
        borderRadius: 10,
        maxWidth: 500,
        '@media (max-width: 500)': {
          width: '100%',
          height: '85%',
        }
      },
  
      formTitle:{
        display: 'flex',
        justifyContent:'center',
        height: '15%',
        paddingLeft: 15,
        backgroundColor: '#536CD5',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '80%',
        maxWidth: 500,
        '@media (max-width: 500)': {
          width: '100%',
          height:'15%',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }
      },
  
      title:{
        fontSize: 30,
        fontWeight: "700",
        color: '#EBEFEF',
      },
  
      formBody:{
        padding: 15,
        
      },
  
      label:{
        fontSize:18,
        color: '#2B324C',
        marginTop: 30,
        marginBottom: 5
      },
  
      input:{
        height: 50,
        backgroundColor: '#EBEFEF',
        padding: 10,
        color: '#9399B0',
        borderRadius: 5,
      },
  
      inputPass:{
        height: 50,
        backgroundColor: '#EBEFEF',
        padding: 10,
        color: '#9399B0',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        width:'85%',
      },
  
      icon:{
        width: '15%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#EBEFEF',
        borderTopRightRadius:10,
        borderBottomRightRadius:10
      },
  
      PassArea:{
        display:'flex',
        flexDirection:'row',
      },
  
      submit:{
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 20,
        marginTop: 30,
        width: 200,
        height: 50,
        borderRadius: 10,
        border: "none",
        backgroundColor: '#536CD5',
        cursor: 'pointer',
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
      },

      back:{
        marginRight: "auto",
        marginLeft: "auto",
        marginBottom: 20,
        width: 200,
        height: 50,
        borderRadius: 10,
        border: "none",
        cursor: 'pointer',
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: '#D2DBFF'
      },

      backButton:{
        color: '#536CD5',
        fontWeight: '700',
      },
  
      button:{
        color: 'white',
        fontWeight: '700',
      },
  
      cadastro:{
        color: '#536CD5',
        fontWeight: '700',
        cursor: 'pointer',
        textAlign: 'center'
      },
    }
  )

  export default styles