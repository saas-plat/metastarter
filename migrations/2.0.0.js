const {
  Action,
  Rule,
  versionAt,
  seriesIn
} = require('@saas-plat/metaschema');

module.exports = Rule('update_sciprt1', {
  e: Action,
  pattern: e => e.name == 'Department.migrate' && e.event == 'saved' &&  versionAt(e,'2.0.0')
}, () => {
  console.log('update to 2.0.0');
})
