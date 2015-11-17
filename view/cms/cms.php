<section class="cms">
	<h1>CMS</h1>
	<form action="index.php?page=cms" method="post">
		<div>

			<h2>Groep</h2>

			<select name="groups" id="">
				<?php foreach ($groups as $group) {
					echo "<option value=\"{$group["group_id"]}\">Groep {$group["group_id"]}</option>";
				} ?>
			</select>

			<h2>Dag</h2>
			<select name="days" id="days">
				<option value="0">Automatisch</option>
				<option value="1">Introdag</option>
				<option value="2">Dag 1</option>
				<option value="3">Dag 2</option>
				<option value="4">Dag 3</option>
				<option value="5">Dag 4</option>
				<option value="6">Dag 5</option>
				<option value="7">Beoordeling</option>
			</select>

		</div>
	<button type="submit">Aanpassen</button>
	</form>
</section>
