<html>
<head>
  <script src="proj4.js"></script>

  <script>
    var utm = "+proj=utm +zone=32";
    var wgs84 = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    console.log(proj4(utm,wgs84,[539884, 4942158]));
  </script>
</head>
<body>

</body>
</html>