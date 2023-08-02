<!DOCTYPE html>
<html>

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>calculatrice binaire version 0.1</title>
	<link rel="stylesheet" href="bin.css">
</head>

<body id="body" style="   background-image: url('ddmarien4.jpg');">
	<table id="calculator" style="background-color: white;">
		<tr>
			<td colspan="4">
				<div id="affichage"></div>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<div class="buttonB">
					<div class="b2"><span style="color: black; border-top:1px solid white;">+</span></div>
					<div class="b2"><span style="color: black; border-top:1px solid white;">*</span></div>
			</td>
			<td colspan="1">
				<div class="buttonB">
					<div id="para"><span style="color: black; border-top:1px solid white;">( </span></div>

					<div class="b2"><span style="color: black; border-top:1px solid white;">)</span></div>
			</td>
			<td colspan="">
				<div class="buttonB">
					<div id="barb"></div>
					<div id="b2" style="margin-top: 15px; color:red;">SupAll</div>
				</div>
			</td>
		</tr>
		<?php
		$tab = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
		$compt = 0;
		for ($i = 0; $i < 7; $i++) {
		?>
			<tr>
				<?php
				for ($j = $compt; $j < $compt + 4; $j++) {
					if ($j <= 25) {
				?>
						<td colspan="">
							<div class="buttonB">
								<div class="b1"><span style="color: black; border-top:1px solid black;"><?php echo  $tab[$j] ?></span></div>
								<div class="b2"><span style="color: black; border-top:1px solid white;"><?php echo  $tab[$j] ?></span></div>
						</td>

				<?php

					}
				}
				?>
			</tr>
		<?php
			$compt += 4;
		}
		?>
		<tr>
			<td>
				<div class="buttonB">
					<div class="b2">=</div>
					<div class="b2"></div>
			</td>
		</tr>


	</table>


</body>

<script type="text/javascript" src="jquery.js"></script>
<script type="module" src="principal.js"></script>

</html>