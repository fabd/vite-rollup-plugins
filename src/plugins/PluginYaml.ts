import { definePlugin, PluginStatus, PluginCategory, html } from '~/util'
import PluginYaml from '~/components/official/PluginYaml.vue'
import yaml from '~/assets/file.yaml'

export default definePlugin({
  name: 'yaml',
  description: 'Convert YAML files to ES6 modules',
  category: PluginCategory.Official,
  status: yaml.key === 'Content from YAML file' ? PluginStatus.Compatible : PluginStatus.Error,
  demo() {
    return html`
      <pre>${JSON.stringify(yaml, null, 2)}</pre>
    `
  },
})
