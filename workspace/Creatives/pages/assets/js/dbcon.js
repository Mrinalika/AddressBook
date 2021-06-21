<script>
    var objConnection = new ActiveXObject("adodb.connection");
    var strConn = "driver={Mysql@localhost:3306};server=localhost;database=creatives.db;uid=root;password=Welcome@123hatesu";
    objConnection.Open(strConn);
    var rs = new ActiveXObject("ADODB.Recordset");
    var strQuery = "SELECT * FROM `creatives.db`.purchase_details";
    rs.Open(strQuery, objConnection);
    rs.MoveFirst();
    while (!rs.EOF) {
        document.write(rs.fields(0) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(rs.fields(1) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
        document.write(rs.fields(2) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
        document.write(rs.fields(3) + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ");
        document.write(rs.fields(4) + "<br/>");
        rs.movenext();
    }
</script>