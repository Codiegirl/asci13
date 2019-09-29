function rot13(str) {
    var solved = "";
    for (var i=0; i<str.length; i++) {
      var asciNum = str[i].charCodeAt();
      if(asciNum >= 65 && asciNum <= 77){
        solved += String.fromCharCode(asciNum + 13)
      } else if (asciNum >= 78 && asciNum <= 90) {
        solved += String.fromCharCode(asciNum - 13);
      } else {
        solved += str[i];
      }
    }
    return solved;
  }
  //[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  rot13("SERR PBQR PNZC")
  // rot13("Z")