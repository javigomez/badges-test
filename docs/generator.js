var fs = require('fs');

badges = {
  "dt": "2022-03-22 00:23:49.033000",
  "repository_slug": "Typeform/videoask-api",
  "average_adoption": 0.875,
  "codeowners": 1,
  "repository_categories": 1,
  "snyk_integration": 1,
  "jira_linked": null,
  "logging": null,
  "error_codes": null,
  "secrets_detection": 1,
  "accessibility_tools": null,
  "typescript": null,
  "gha_migration": null,
  "phoenix_decommission": null,
  "flagger": null,
  "prettier": null,
  "ci_standard_checks": 1,
  "frontend_canary_deployments": null,
  "event_dispatcher": null,
  "incident_handling_playbook": 0,
  "amazon_ecr": 1,
  "default_branch": 1,
  "gha_env_vars": 1,
  "ml_model_promoter": null,
  "secure_dependencies": 1,
  "go_lint": null
}

function color(score) {
  if (score == 1) return 'green';
  if (score == null) return 'blue'
  return "red"
}

for (const key in badges) {
  content = {
    "schemaVersion": 1,
    "label": key,
    "message": badges[key] == null ? "N/A" : `${badges[key]*100}%`,
    "color": color(badges[key]) 
  }
  const filename = `videoask-api_${key}.json`
  fs.writeFile(filename, JSON.stringify(content, null, 2), function (err) {
    if (err) throw err;
    console.log(`![Custom badge](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fjavigomez.github.io%2Fbadges-test%2F${filename})`);
  });
}


