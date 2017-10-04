
<?php require 'connexion/connexion.php';

$sql=$pdo->query("SELECT * FROM t_utilisateurs");
$utilisateurs=$sql->fetch();

$sql=$pdo->query("SELECT * FROM t_formations");
$formations=$sql->fetchAll();

$sql=$pdo->query("SELECT * FROM t_competences");
$competences=$sql->fetch();

?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="assets/ico/favicon.png">

    <title><?php echo  $utilisateurs['prenom'].' '.$utilisateurs['nom']; ?> - integrateur developpeur web</title>

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.css" rel="stylesheet">

      <!-- Custom styles for this template -->
    <link href="assets/css/main.css" rel="stylesheet">

    <link rel="stylesheet" href="assets/css/font-awesome.min.css">

    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

    <!--Feuile de style perso-->
   <!-- <link href="assets/css/style.css" rel="stylesheet">-->

    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Raleway:400,300,700' rel='stylesheet' type='text/css'>

    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.js"></script>
    <script type="text/javascript" src="assets/js/smoothscroll.js"></script>
    <script src="assets/js/Chart.js"></script>

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="assets/js/html5shiv.js"></script>
      <script src="assets/js/respond.min.js"></script>
    <![endif]-->
  </head>

  <body data-spy="scroll" data-offset="0" data-target="#nav">

	<div id="section-topbar">
		<div id="topbar-inner">
			<div class="container">
				<div class="row">
					<div class="dropdown">
						<ul id="nav" class="nav">
							<!-- <li class="menu-item"><a class="smoothScroll" href="#headerwrap" title="headerwrap"><i class="icon-user"></i></a></li> -->
							<li class="menu-item"><a href="#headerwrap" title="headerwrap"><i class="icon-user"></i></a></li>
							<li class="menu-item"><a href="#resume" title="Resume"><i class="icon-file"></i></a></li>
							<!-- <li class="menu-item"><a class="smoothScroll" href="#resume" title="Resume"><i class="icon-file"></i></a></li> -->
							<li class="menu-item"><a href="#portfolio" title="portfolio"><i class="icon-briefcase"></i></a></li>
							<!-- <li class="menu-item"><a class="smoothScroll" href="#portfolio" title="portfolio"><i class="icon-briefcase"></i></a></li> -->
							<li class="menu-item"><a href="#contact" title="Contact"><i class="icon-envelope"></i></a></li>
							<!-- <li class="menu-item"><a class="smoothScroll" href="#contact" title="Contact"><i class="icon-envelope"></i></a></li> -->
						</ul><!--/ uL#nav -->
					</div><!-- /.dropdown -->
					<div class="clear"></div>
				</div><!--/.row -->
			</div><!--/.container -->
			<div class="clear"></div>
		</div><!--/ #topbar-inner -->
	</div><!--/ #section-topbar -->

	<div id="headerwrap">
		<div class="container">
			<div class="row centered">
				<div class="col-lg-12 titre">
					<h1> <?php echo  $utilisateurs['prenom'].' '.$utilisateurs['nom']; ?></h1>
					<h2 class="">Intégrateur & Développeur web</h2>
				</div><!--/.col-lg-12 -->
			</div><!--/.row -->

        <ul>
            <li>
                <div class="bord"></div>
            </li>
            <li><a href="https://github.com/karimiha" target="_blank" rel="noopener" title="voir mon profil github"><i class="icon-github"></i></a>
            </li>
            <li>
             <a href="https://www.facebook.com/profile.php?id=100015401233983" target="_blank" rel="noopener" title="voir mon profil facebook"><i class="icon-facebook " style></i></a>
            </li>
            <li>
               <a href="https://www.linkedin.com/in/karim-ihadadene-161324144/" target=_blank rel="noopener" title="voir mon profil linkedIn"><i class="icon-linkedin"></i></a>

            </li>
            <li>
                <a href="assets/cv_karim.pdf" download="cv_karim2"><i class="icon-file" rel="noopener" title="Téléchargez mon CV"></i></a>
            </li>
            <li>
                <div class="bord"></div>
            </li>
        </ul>
    </div>
   </div><!--/.#headerwrap -->
    <section id="resume" name="resume"></section>
	<!--EDUCATION DESCRIPTION -->
	<div class="container desc">
		<div class="row">
            <div class="col-lg-2 col-lg-offset-1">
                <h2 class="educ h1"></h2>
            </div>
		</div>

        <div class="row">
     <?php
            $sql=$pdo->prepare("SELECT * FROM t_experiences");
            $sql->execute();
            $nbr_experiences = $sql->rowCount();?>



            <div class="col-lg-6 col-lg-offset-3">
                <h2 class="h1">MES EXPÉRIENCES PROFESSIONNELLES</h2>
               <?php

                while($experiences=$sql->fetch()){ ?>

                    <p><t> <?= $experiences['e_titre'];?> </t><br/> </p>
                    <strong> <?= $experiences['e_soustitre'];?> </strong><br/>
                    <strong> <?= $experiences['e_dates'];?> </strong><br/>
            <?php  }
                ?>

            </div>

		</div><!--/.row -->
		<br>
		<hr>
	</div><!--/.container -->


	<!--WORK DESCRIPTION -->
	<div class="container desc">
		<div class="row">


         <?php
            $sql=$pdo->prepare("SELECT * FROM t_formations");
            $sql->execute();
            $nbr_formations = $sql->rowCount();?>



            <div class="col-lg-6 col-lg-offset-3">
                <h2 class="h1">MES FORMATIONS</h2>
               <?php

                while($formations=$sql->fetch()){ ?>

                    <p><t> <?= $formations['f_titre'];?> </t><br/> </p>
                    <strong> <?= $formations['f_soustitre'];?> </strong><br/>
                    <strong> <?= $formations['f_dates'];?> </strong><br/>
            <?php  }
                ?>

            </div>
		</div><!--/.row -->
		<br>

	</div><!--/.container -->





	<!--SKILLS DESCRIPTION -->
	<div id="skillswrap">
		<div class="container">
		<div class="row">
		<div class="col-lg-2 col-lg-offset-1">


      <h2 class="h1" id="cmp">MES COMPETENCES </h2>
		</div>
		</div>
			<div class="row">

					<!--<div class="col-lg-2 col-lg-offset-1">
						<h1> Compétences </h1>
					</div>-->
            <div class="col-lg-3 col-lg-offset-3  centered">
              <canvas id="html" height="130" width="130"></canvas>
              <p>HTML/CSS</p>
              <br>
              <script>
              var doughnutData = [
                {
                  value: 80,
                  color:"#1abc9c"
                },
                {
                  value : 20,
                  color : "#ecf0f1"
                }
              ];
              var myDoughnut = new Chart(document.getElementById("html").getContext("2d")).Doughnut(doughnutData);
              </script>
            </div>

            <div class="col-lg-3 centered">
              <canvas id="javascript" height="130" width="130"></canvas>
              <p>Javascript/jQuery</p>
              <br>
              <script>
              var doughnutData = [
                {
                  value: 30,
                  color:"#1abc9c"
                },
                {
                  value : 70,
                  color : "#ecf0f1"
                }
              ];
              var myDoughnut = new Chart(document.getElementById("javascript").getContext("2d")).Doughnut(doughnutData);
              </script>
            </div>

            <div class="col-lg-3  centered">
              <canvas id="illustrator" height="130" width="130"></canvas>
              <p>Php/Mysql</p>
              <br>
              <script>
              var doughnutData = [
                {
                  value: 50,
                  color:"#1abc9c"
                },
                {
                  value : 50,
                  color : "#ecf0f1"
                }
                ];
                var myDoughnut = new Chart(document.getElementById("illustrator").getContext("2d")).Doughnut(doughnutData);
              </script>
            </div>
            <div class="col-lg-3 col-lg-offset-3 centered">
              <canvas id="bootstrap" height="130" width="130"></canvas>
              <p>Bootstrap</p>
              <br>
              <script>
                var doughnutData = [
                {
                  value: 70,
                  color:"#1abc9c"
                },
                {
                  value : 30,
                  color : "#ecf0f1"
                }
                ];
                var myDoughnut = new Chart(document.getElementById("bootstrap").getContext("2d")).Doughnut(doughnutData);
              </script>
            </div>


            <div class="col-lg-3 centered">
              <canvas id="wordpress" height="130" width="130"></canvas>
              <p>Wordpress</p>
              <br>
              <script>
                var doughnutData = [
                {
                  value: 50,
                  color:"#1abc9c"
                },
                {
                  value : 50,
                  color : "#ecf0f1"
                }
                ];
                var myDoughnut = new Chart(document.getElementById("wordpress").getContext("2d")).Doughnut(doughnutData);
              </script>
            </div>

            <div class="col-lg-3 centered">
              <canvas id="photoshop" height="130" width="130"></canvas>
              <p>Github</p>
              <br>
              <script>
                var doughnutData = [
                {
                  value: 30,
                  color:"#1abc9c"
                },
                {
                  value : 70,
                  color : "#ecf0f1"
                }
                ];
                var myDoughnut = new Chart(document.getElementById("photoshop").getContext("2d")).Doughnut(doughnutData);
              </script>
            </div>
			</div><!--/.row -->
			<br>
		</div><!--/.container -->
	</div><!--/ #skillswrap -->




	<!--PORTFOLIO DESCRIPTION -->
	<section id="work" name="work">
  	<div class="container desc">
      <div class="row">
    	<!--<div class="col-lg-2 col-lg-offset-1">-->
    	<div class="row">
                  <div class="col-lg-2 col-lg-offset-1" id="portfolio">
                      <h2 id="port" class="h1">PORTFOLIO</h2>
    			</div>
    	</div>
    	<div class="col-lg-6 col-lg-offset3">
    		<p>Espace et galaxy</p>
        <a href="portfolio/espace_responsive/index.html" target="_blank"  rel="noopener"><img class="img-responsive " src="assets/img/Capture0000001.JPG" alt=""></a>
    	<!--<p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
    		<sm><i class="icon-tag"></i> design</sm></more>
    	</p>-->
    	</div>
    	<div class="col-lg-6 col-lg-offset3">
    			<p>Boutique de jouet</p>
          <p><a href="portfolio/jouet_responsive/index.html" target="_blank" rel="noopener"><img class="img-responsive" src="assets/img/Capture000002.JPG" alt=""></a></p>
    		<!--<p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
    			<sm><i class="icon-tag"></i> front-end</sm></more>
    		</p>-->
    	</div>
      <div class="">
          <p>Apple</p>
          <a href="portfolio/appel_responsive/index.html" target="_blank" rel="noopener"><img id="iphone" class="img-responsive" src="assets/img/Capture3.JPG" alt=""></a>
      <!--<p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
          <sm><i class="icon-tag"></i> design</sm></more>
      </p>-->
      </div>
        <div class="col-lg-6 col-lg-offset3">
          <p>Les enfants travailleurs</p>
          <a href="portfolio/mesrealisation/index.html" target="_blank"  rel="noopener"><img class="img-responsive " src="assets/img/Capture4.JPG" alt=""></a>
          <!--<p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
          <sm><i class="icon-tag"></i> design</sm></more>
        </p>-->
        </div>

      <div class="col-lg-6 col-lg-offset3">
        <p>Les oiseaux</p>
        <a href="portfolio/mesrealisation1/index.html" target="_blank"  rel="noopener"><img class="img-responsive" id="ois" src="assets/img/Capture5.JPG" alt=""></a>
        <!--<p><more>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>
        <sm><i class="icon-tag"></i> design</sm></more>
      </p>-->
    </div>


    	</div><!--/.row -->
  	<br>
  	<br>
  	</div><!--/.container -->
  </section>


	<section id="contact" name="contact">
	<!--FOOTER DESCRIPTION -->
	<div id="footwrap">
		<div class="container">
			<div class="row">

				<div class="col-lg-2 col-lg-offset-1">

				</div>
				<div class="col-lg-6">
					<p><t>Email</t><br/>
						karimiha32@yahoo.fr<br/>
					</p>
					<p><t>Adresse</t><br/>
						35 rue gabrielle josserand <br/>
						93500 Pantin  <br/>
						France. <br/>
					</p>
					<p><t>Téléphone</t><br/>
						+33 6 18 14 44 22<br/>
					</p>
				</div>
				<div class="col-lg-3">
					<p><sm>Suivez-moi</sm></p>
					<p>
						<a href="https://github.com/karimiha" target="_blank" rel="noopener"><i class="icon-github"></i></a>

						<a href="https://www.facebook.com/profile.php?id=100015401233983" target="_blank" rel="noopener" ><i class="icon-facebook"></i></a>
						<a href="https://www.linkedin.com/in/karim-ihadadene-161324144/"><i class="icon-linkedin"></i></a>


					</p>
				</div>
			</div><!--/.row -->
		</div><!--/.container -->
	</div><!--/ #footer -->
</section>
	<div id="c">
		<div class="container">
            <p><a href="../admin/authentification.php"><?php echo  $utilisateurs['prenom'].' '.$utilisateurs['nom']; ?></a> - 2017 <!--<a href="http://www.blacktie.co">BLACKTIE.CO</a>--></p>

		</div>
	</div>

    <!-- Placed at the end of the document so the pages load faster -->
    <script src="assets/js/script.js"></script>

  </body>
</html>
