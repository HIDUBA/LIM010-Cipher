window.cipher = {
  encode: (offset, string) => {
    /* Acá va  código que cifra*/
    let toAcsii;
    let masKey;
    let msjResultado='';
    for (let i = 0; i < string.length; i++) {
      toAcsii = string.charCodeAt(i);
      
      if (toAcsii>=65 && toAcsii<=90) {
        masKey = (toAcsii - 65 + parseInt(offset))%26 +65;
      }
      else if(97<=toAcsii && toAcsii<=122) {
        masKey = (toAcsii - 97 + parseInt(offset))%26 + 97;
      }
      else{
        masKey= toAcsii;
      }
      msjResultado += String.fromCharCode(masKey);
    }
  return msjResultado;
  },

  decode: (offset, string) => {
    /* Acá va  código que descifra*/
    let toAcsii;
    let masKey;
    let msjResultado='';

    for (let i = 0; i < string.length; i++) {
      toAcsii = string.charCodeAt(i);
      
      if (toAcsii>=65 && toAcsii<=90) {
        masKey = 90 -((90 - toAcsii + parseInt(offset))%26);
      }
        else if(97<=toAcsii && toAcsii<=122) {
          masKey = 122 -((122 - toAcsii + parseInt(offset))%26);

      }
      else{
        masKey= toAcsii;
      }
      msjResultado += String.fromCharCode(masKey);
    }
  return msjResultado;
  }
};