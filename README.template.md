{{labels.lastUpdated}}: {{meta.lastUpdated}} • {{meta.prsWelcome}}

**{{labels.languages}}** {{#each languages}}[{{label}}]({{path}}){{#unless @last}} • {{/unless}}{{/each}}

# {{hero.title}} 

{{hero.subtitle}}

## {{tldr.heading}}
{{tldr.subheading}}

| {{tldr.headers.tool}} | {{tldr.headers.models}} | {{tldr.headers.freeLimit}} | {{tldr.headers.creditCard}} |
|------|------------------|------------------|-------------|
{{#each tldr.rows}}| [{{name}}]({{url}}) | {{models}} | {{freeLimit}} | {{creditCard}} |
{{/each}}

### {{qualifyingModels.title}}
{{qualifyingModels.subtitle}}

| {{qualifyingModels.headers.model}} | {{qualifyingModels.headers.score}} | {{qualifyingModels.headers.provider}} |
|-------|-------------------|----------|
{{#each qualifyingModels.rows}}| {{model}} | {{score}} | {{provider}} |
{{/each}}

### {{contributing.title}}

{{contributing.body}}

### {{disclaimer.title}}

{{disclaimer.body}}

## {{contents.title}}

{{#each contents.items}}- [{{title}}]({{anchor}})
{{/each}}

{{#each sections}}
## {{title}}
{{#if note}}{{note}}{{/if}}

{{#if description}}{{description}}

{{/if}}
{{#if tools}}
{{#each tools}}
### [{{name}}]({{url}})

> {{description}}
{{#each bullets}}- {{this}}
{{/each}}

{{#if links}}**{{../labels.links}}** {{#each links}}[{{label}}]({{url}}){{#unless @last}} | {{/unless}}{{/each}}{{/if}}

{{#unless @last}}
---

{{/unless}}
{{/each}}
{{/if}}
{{#if body}}
{{#each body}}{{this}}

{{/each}}
{{/if}}
{{#if afterNote}}{{afterNote}}

{{/if}}
---

{{/each}}
## {{comparisonNotes.title}}

{{#each comparisonNotes.items}}- {{this}}
{{/each}}

---

## {{relatedResources.title}}

{{#each relatedResources.items}}- [{{label}}]({{url}}) - {{description}}
{{/each}}

---
