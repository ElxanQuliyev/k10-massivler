
        function tarix()
        {
            var buguntarixi = new Date(Date());
            var bugun=buguntarixi.getDate();
            var buay=buguntarixi.getMonth()+1;
            var buil=buguntarixi.getFullYear();
            buay=buay+1;
            
            document.getElementById("ilk").innerHTML=bugun+"/"+buay+"/"+buil;
        }
        function yazinideyiw()
        {
            var a = document.getElementById("txtyazi").value;
            document.getElementById("ilk").innerHTML=a;
            document.getElementById("ilk").style.display="block";
        }
        function salamyaz() {
            document.getElementById('ilk').innerHTML = 'funksiya ile salam yaz';
            document.getElementById("ilk").style.display="block";
        }
        function renginideyis()
        {
            document.getElementById("ilk").style.color="black";
            document.getElementById("ilk").style.backgroundColor="yellow";
            document.getElementById("ilk").style.display="block";
        }
        function gizlet()
        {
            document.getElementById("ilk").style.display="none";
            document.getElementById("sekil").style.display="none";
        }
        function toyotasekili()
        {
            document.getElementById("sekil").src="toyota.jpg";
            document.getElementById("sekil").style.display="block";
        }
        function mercedessekili()
        {
            document.getElementById("sekil").src="mersedes.jpg";
            document.getElementById("sekil").style.display="block";
        }
        function bmwsekili()
        {
            document.getElementById("sekil").src="bmw.jpg";
            document.getElementById("sekil").style.display="block";
        }
   