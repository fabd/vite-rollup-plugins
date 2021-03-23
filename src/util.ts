import type { Plugin, PluginCategory } from './types'
import htm from 'htm'
import { h } from 'vue'
export { PluginCategory, PluginStatus } from './types'

export function definePlugin(plugins: Plugin | Plugin[], category?: PluginCategory) {
  let _plugins: Plugin[] = []
  
  if (!Array.isArray(plugins))
    _plugins = [ plugins ]
  else
    _plugins = plugins

  if (category)
    _plugins = _plugins.map(p => ({ ...p, category }))

  return _plugins
}

export const html = htm.bind(h)
