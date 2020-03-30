const dashboard = new View('.app',
	`
		<div class="settings-view">
			<div></div>
			<div class="dashboard-container">
				<h2>Dashboard</h2>

				<div class="dashboard-item">
					<h3>activity</h3>
					<canvas id="dashboardActivityStatistic" width="600" height="300"></canvas>
				</div>
			</div>
		</div>
	`,
	'settings-view'
)
