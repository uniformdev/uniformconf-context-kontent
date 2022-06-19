const generateModelsAsync = require('@kentico/kontent-model-generator').generateModelsAsync;
require('dotenv').config();

if (!process.env.KONTENT_PROJECT_ID) {
  throw new Error('process.env.KONTENT_PROJECT_ID is empty!');
}

generateModelsAsync({
  sdkType: 'delivery',
  projectId: process.env.KONTENT_PROJECT_ID,
  addTimestamp: true,
  elementResolver: 'camelCase',
  fileResolver: (type) => `lib/contentTypes/${type.system.codename}`,
});
