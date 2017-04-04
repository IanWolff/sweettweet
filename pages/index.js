import HandlesForm from '../components/handles'

export default class Index extends React.Component{
  render(){
    return(
      <div>
      <style>{`
      html{
position:relative;
min-height: 100%;
}
body {
  background: url('http://bit.ly/2onSzah') no-repeat fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
}
#wrapper {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -90%);
}
#textbox {
min-height:100%;
position: absolute;
margin:18% 20%
}
.logo img {
width: 800px;
height:138px;
}
input{padding-top:5px;padding-right:0px;padding-bottom:5px;padding-left:37px;
}
input[type="text"]#statictext{
-webkit-appearance:none!important;
color: rgba(256,256,256,10);
font-size: 30px;
position: absolute;
display: block;
padding-left: 10px;
padding-top: 1px;
float: left;
width:63px;
height:50px;
border: 0px;
background:rgba(100,70,90,0);
}
.submitbutton {
background:url(http://bit.ly/2nvcwYY) no-repeat;
background-size:35px 35px;
background-position: center;
position: fixed;
cursor:pointer;
border:none;
width:50px;
height:50px;
margin-left:54.5%;
padding-top: 48px;
z-index: 100
}
.submitbutton:active {
background:url(http://bit.ly/2ooULyh) no-repeat;
background-size:35px 35px;
background-position: center;
position: fixed;
cursor:pointer;
border:none;
width:50px;
height:50px;
margin :2 0 0 435;
z-index: 100
}
input[type="text"]#twitterhandle{
-webkit-appearance:none!important;
-webkit-border-radius: 50px;
-moz-border-radius: 50px;
-webkit-box-sizing: 20px;
-moz-box-sizing: 20px;
color: #fff;
font-size: 30px;
position: fixed;
display: block;
margin :auto;
width:490px;
height:50px;
box-sizing: border-box;
border: 0px;
background:rgba(100,70,90,0.6);
`}</style>
<HandlesForm/>
</div>

    )

  }

}
