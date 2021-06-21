<?php 
$companies = $_GET['Companies']
if (!empty($companies)) {
	# code...
	$host ="localhost";
	$dbusername ="root";
	$dbpassword="";
	dbname="creatives_db";

	// create connection
	$conn = new mysqli($host,$dbusername,$dbpassword,$dbname);

	if(mysqli_connect_error()){
		die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
	}else{
		$SELECT = "SELECT Firm_Name From Invoice_List Where Firm_Name = ? Limit 1";
	}

	$conn->close();
}else{
	echo "List of companies loaded.";
	die();
}
?>