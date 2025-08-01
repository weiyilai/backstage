# @backstage/plugin-scaffolder-react

## 1.19.0-next.1

### Minor Changes

- 4f99e10: **DEPRECATION**: The following types have been deprecated from this package and moved into `@backstage/plugin-scaffolder-common` and should be imported from there instead.

  `Action`, `ListActionsResponse`, `LogEvent`, `ScaffolderApi`, `ScaffolderDryRunOptions`, `ScaffolderDryRunResponse`, `ScaffolderGetIntegrationsListOptions`, `ScaffolderGetIntegrationsListResponse`,
  `ScaffolderOutputLink`, `ScaffolderOutputText`, `ScaffolderScaffoldOptions`, `ScaffolderScaffoldResponse`, `ScaffolderStreamLogsOptions`, `ScaffolderTask`, `ScaffolderTaskOutput`, `ScaffolderTaskStatus`,
  `ScaffolderUsageExample`, `TemplateFilter`, `TemplateGlobalFunction`, `TemplateGlobalValue`, `TemplateParameterSchema`.

- c08cbc4: Move Scaffolder API to OpenAPI

### Patch Changes

- f2f133c: Internal update to use the new variant of `ApiBlueprint`.
- c4b7c50: Export `FormField` type from `/alpha` in `-react` package, and internal refactor.
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.7.0-next.0
  - @backstage/plugin-catalog-react@1.20.0-next.1
  - @backstage/frontend-plugin-api@0.11.0-next.0
  - @backstage/theme@0.6.8-next.0
  - @backstage/catalog-client@1.11.0-next.0
  - @backstage/core-components@0.17.5-next.0
  - @backstage/catalog-model@1.7.5
  - @backstage/core-plugin-api@1.10.9
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.36

## 1.18.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.19.2-next.0
  - @backstage/frontend-plugin-api@0.10.4

## 1.18.0

### Minor Changes

- c1ce316: BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

### Patch Changes

- 94c11a5: Scroll to the top of the page when navigating between steps in template forms.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.19.1
  - @backstage/catalog-model@1.7.5
  - @backstage/catalog-client@1.10.2
  - @backstage/core-components@0.17.4
  - @backstage/core-plugin-api@1.10.9
  - @backstage/theme@0.6.7
  - @backstage/plugin-scaffolder-common@1.6.0
  - @backstage/frontend-plugin-api@0.10.4
  - @backstage/plugin-permission-react@0.4.36

## 1.18.0-next.2

### Minor Changes

- c1ce316: BREAKING `/alpha`: Converted `scaffolder.task.read` and `scaffolder.task.cancel` into Resource Permissions.

  BREAKING `/alpha`: Added a new scaffolder rule `isTaskOwner` for `scaffolder.task.read` and `scaffolder.task.cancel` to allow for conditional permission policies such as restricting access to tasks and task events based on task creators.

  BREAKING `/alpha`: Retrying a task now requires both `scaffolder.task.read` and `scaffolder.task.create` permissions, replacing the previous requirement of `scaffolder.task.read` and `scaffolder.task.cancel`.

### Patch Changes

- 94c11a5: Scroll to the top of the page when navigating between steps in template forms.
- Updated dependencies
  - @backstage/theme@0.6.7-next.1
  - @backstage/core-components@0.17.4-next.2
  - @backstage/plugin-scaffolder-common@1.6.0-next.1
  - @backstage/core-plugin-api@1.10.9-next.0
  - @backstage/plugin-catalog-react@1.19.1-next.1

## 1.17.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/catalog-model@1.7.5-next.0
  - @backstage/plugin-catalog-react@1.19.1-next.1
  - @backstage/catalog-client@1.10.2-next.0
  - @backstage/core-components@0.17.4-next.1
  - @backstage/core-plugin-api@1.10.9-next.0
  - @backstage/plugin-permission-react@0.4.36-next.0
  - @backstage/plugin-scaffolder-common@1.5.12-next.0
  - @backstage/frontend-plugin-api@0.10.4-next.1

## 1.17.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/theme@0.6.7-next.0
  - @backstage/plugin-catalog-react@1.19.1-next.0
  - @backstage/core-components@0.17.4-next.0
  - @backstage/catalog-client@1.10.1
  - @backstage/catalog-model@1.7.4
  - @backstage/core-plugin-api@1.10.8
  - @backstage/frontend-plugin-api@0.10.4-next.0
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.35
  - @backstage/plugin-scaffolder-common@1.5.11

## 1.17.0

### Minor Changes

- 6c972fe: Added information about the `entityRef` and `taskId` to the analytics events whenever is possible.

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.17.3
  - @backstage/catalog-client@1.10.1
  - @backstage/core-plugin-api@1.10.8
  - @backstage/frontend-plugin-api@0.10.3
  - @backstage/plugin-catalog-react@1.19.0
  - @backstage/catalog-model@1.7.4
  - @backstage/theme@0.6.6
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.35
  - @backstage/plugin-scaffolder-common@1.5.11

## 1.16.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.17.3-next.0
  - @backstage/plugin-catalog-react@1.19.0-next.2
  - @backstage/frontend-plugin-api@0.10.3-next.1
  - @backstage/catalog-client@1.10.1-next.0
  - @backstage/catalog-model@1.7.4
  - @backstage/core-plugin-api@1.10.7
  - @backstage/theme@0.6.6
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.34
  - @backstage/plugin-scaffolder-common@1.5.11

## 1.16.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.10.1-next.0
  - @backstage/plugin-catalog-react@1.18.1-next.1
  - @backstage/catalog-model@1.7.4
  - @backstage/core-components@0.17.2
  - @backstage/core-plugin-api@1.10.7
  - @backstage/frontend-plugin-api@0.10.3-next.0
  - @backstage/theme@0.6.6
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.34
  - @backstage/plugin-scaffolder-common@1.5.11

## 1.16.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/frontend-plugin-api@0.10.3-next.0
  - @backstage/plugin-catalog-react@1.18.1-next.0

## 1.16.0

### Minor Changes

- 4235e87: add templating extensions page

### Patch Changes

- 36ae651: Fixing a bug where the name for `templatingExtensions` was incorrectly set to `templateExtensions`
- 72d019d: Removed various typos
- Updated dependencies
  - @backstage/frontend-plugin-api@0.10.2
  - @backstage/theme@0.6.6
  - @backstage/core-components@0.17.2
  - @backstage/catalog-model@1.7.4
  - @backstage/plugin-catalog-react@1.18.0
  - @backstage/core-plugin-api@1.10.7
  - @backstage/catalog-client@1.10.0
  - @backstage/plugin-permission-react@0.4.34
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-scaffolder-common@1.5.11

## 1.16.0-next.3

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.17.2-next.1
  - @backstage/core-plugin-api@1.10.7-next.0
  - @backstage/plugin-catalog-react@1.18.0-next.3
  - @backstage/catalog-client@1.10.0-next.0
  - @backstage/catalog-model@1.7.3
  - @backstage/frontend-plugin-api@0.10.2-next.1
  - @backstage/theme@0.6.6-next.0
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.34-next.1
  - @backstage/plugin-scaffolder-common@1.5.11-next.0

## 1.16.0-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.10.7-next.0
  - @backstage/core-components@0.17.2-next.1
  - @backstage/frontend-plugin-api@0.10.2-next.1
  - @backstage/plugin-catalog-react@1.18.0-next.2
  - @backstage/plugin-permission-react@0.4.34-next.1
  - @backstage/catalog-client@1.10.0-next.0
  - @backstage/catalog-model@1.7.3
  - @backstage/theme@0.6.6-next.0
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-scaffolder-common@1.5.11-next.0

## 1.16.0-next.1

### Patch Changes

- 72d019d: Removed various typos
- Updated dependencies
  - @backstage/theme@0.6.6-next.0
  - @backstage/core-components@0.17.2-next.0
  - @backstage/frontend-plugin-api@0.10.2-next.0
  - @backstage/plugin-catalog-react@1.18.0-next.1
  - @backstage/catalog-client@1.10.0-next.0
  - @backstage/catalog-model@1.7.3
  - @backstage/core-plugin-api@1.10.6
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.34-next.0
  - @backstage/plugin-scaffolder-common@1.5.11-next.0

## 1.16.0-next.0

### Minor Changes

- 4235e87: add templating extensions page

### Patch Changes

- 36ae651: Fixing a bug where the name for `templatingExtensions` was incorrectly set to `templateExtensions`
- Updated dependencies
  - @backstage/plugin-catalog-react@1.18.0-next.0
  - @backstage/catalog-client@1.10.0-next.0
  - @backstage/catalog-model@1.7.3
  - @backstage/core-components@0.17.1
  - @backstage/core-plugin-api@1.10.6
  - @backstage/frontend-plugin-api@0.10.1
  - @backstage/theme@0.6.5
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.33
  - @backstage/plugin-scaffolder-common@1.5.10

## 1.15.0

### Minor Changes

- 5890016: add api to retrieve template extensions info from scaffolder-backend

### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- 6ed42b7: Scaffolding - Template card - button to show template entity detail
- 7ae9996: Fixes the detail icon in light theme to be visible in proper color (same as favorite star).
- Updated dependencies
  - @backstage/plugin-catalog-react@1.17.0
  - @backstage/frontend-plugin-api@0.10.1
  - @backstage/core-components@0.17.1
  - @backstage/core-plugin-api@1.10.6
  - @backstage/plugin-permission-react@0.4.33
  - @backstage/theme@0.6.5
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-scaffolder-common@1.5.10

## 1.15.0-next.2

### Patch Changes

- a47fd39: Removes instances of default React imports, a necessary update for the upcoming React 19 migration.

  <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

- Updated dependencies
  - @backstage/frontend-plugin-api@0.10.1-next.1
  - @backstage/core-components@0.17.1-next.1
  - @backstage/core-plugin-api@1.10.6-next.0
  - @backstage/plugin-permission-react@0.4.33-next.0
  - @backstage/plugin-catalog-react@1.17.0-next.2
  - @backstage/theme@0.6.5-next.0
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-scaffolder-common@1.5.10

## 1.15.0-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.17.1-next.0
  - @backstage/frontend-plugin-api@0.10.1-next.0
  - @backstage/plugin-catalog-react@1.16.1-next.1
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/core-plugin-api@1.10.5
  - @backstage/theme@0.6.4
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.32
  - @backstage/plugin-scaffolder-common@1.5.10

## 1.15.0-next.0

### Minor Changes

- 5890016: add api to retrieve template extensions info from scaffolder-backend

### Patch Changes

- 6ed42b7: Scaffolding - Template card - button to show template entity detail
- Updated dependencies
  - @backstage/plugin-catalog-react@1.16.1-next.0
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/core-components@0.17.0
  - @backstage/core-plugin-api@1.10.5
  - @backstage/frontend-plugin-api@0.10.0
  - @backstage/theme@0.6.4
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.32
  - @backstage/plugin-scaffolder-common@1.5.10

## 1.14.6

### Patch Changes

- 4d26652: Fix field extension validation not working when field is in dependencies in an array field
- b3b7c9c: Deprecated the alpha `ScaffolderFormFieldsApi` and `formFieldsApiRef` as these are being replaced with a different solution.
- 48aab13: Add i18n support for scaffolder-react plugin
- 3db64ba: Disable the submit button on creating
- 34ea3f5: Updated dependency `flatted` to `3.3.3`.
- Updated dependencies
  - @backstage/core-components@0.17.0
  - @backstage/core-plugin-api@1.10.5
  - @backstage/frontend-plugin-api@0.10.0
  - @backstage/plugin-catalog-react@1.16.0
  - @backstage/plugin-scaffolder-common@1.5.10
  - @backstage/plugin-permission-react@0.4.32
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/theme@0.6.4
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11

## 1.14.6-next.2

### Patch Changes

- 48aab13: Add i18n support for scaffolder-react plugin
- 3db64ba: Disable the submit button on creating
- 34ea3f5: Updated dependency `flatted` to `3.3.3`.
- Updated dependencies
  - @backstage/frontend-plugin-api@0.10.0-next.2
  - @backstage/plugin-catalog-react@1.16.0-next.2
  - @backstage/core-components@0.16.5-next.1
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/core-plugin-api@1.10.4
  - @backstage/theme@0.6.4
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.31
  - @backstage/plugin-scaffolder-common@1.5.10-next.0

## 1.14.6-next.1

### Patch Changes

- 4d26652: Fix field extension validation not working when field is in dependencies in an array field
- Updated dependencies
  - @backstage/core-components@0.16.5-next.0
  - @backstage/plugin-scaffolder-common@1.5.10-next.0
  - @backstage/plugin-catalog-react@1.16.0-next.1
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/core-plugin-api@1.10.4
  - @backstage/frontend-plugin-api@0.9.6-next.1
  - @backstage/theme@0.6.4
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11
  - @backstage/plugin-permission-react@0.4.31

## 1.14.6-next.0

### Patch Changes

- b3b7c9c: Deprecated the alpha `ScaffolderFormFieldsApi` and `formFieldsApiRef` as these are being replaced with a different solution.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.16.0-next.0
  - @backstage/frontend-plugin-api@0.9.6-next.0

## 1.14.5

### Patch Changes

- 656f67b: Reverted the validation in dependencies in scaffolder
- 2003fc2: Hide text output button if only one is present
- a35118f: build(deps): bump `immer` from 8.0.4 to 9.0.6
- 1283f06: Added missing `ajv` and `immer` dependencies to `@backstage/plugin-scaffolder-react`
- 3edf7e7: Add schema output return type to the `makeFieldSchema` function return
- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.
- Updated dependencies
  - @backstage/core-components@0.16.4
  - @backstage/plugin-catalog-react@1.15.2
  - @backstage/frontend-plugin-api@0.9.5
  - @backstage/core-plugin-api@1.10.4
  - @backstage/plugin-permission-react@0.4.31
  - @backstage/version-bridge@1.0.11
  - @backstage/theme@0.6.4
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/types@1.2.1
  - @backstage/plugin-scaffolder-common@1.5.9

## 1.14.5-next.3

### Patch Changes

- Updated dependencies
  - @backstage/frontend-plugin-api@0.9.5-next.3
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/core-components@0.16.4-next.1
  - @backstage/core-plugin-api@1.10.4-next.0
  - @backstage/theme@0.6.4-next.0
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11-next.0
  - @backstage/plugin-catalog-react@1.15.2-next.3
  - @backstage/plugin-permission-react@0.4.31-next.0
  - @backstage/plugin-scaffolder-common@1.5.9

## 1.14.5-next.2

### Patch Changes

- 656f67b: Reverted the validation in dependencies in scaffolder
- 2003fc2: Hide text output button if only one is present
- a35118f: build(deps): bump `immer` from 8.0.4 to 9.0.6
- 1283f06: Added missing `ajv` and `immer` dependencies to `@backstage/plugin-scaffolder-react`
- Updated dependencies
  - @backstage/core-components@0.16.4-next.1
  - @backstage/plugin-catalog-react@1.15.2-next.2
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/core-plugin-api@1.10.4-next.0
  - @backstage/frontend-plugin-api@0.9.5-next.2
  - @backstage/theme@0.6.4-next.0
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.11-next.0
  - @backstage/plugin-permission-react@0.4.31-next.0
  - @backstage/plugin-scaffolder-common@1.5.9

## 1.14.4-next.1

### Patch Changes

- 58ec9e7: Removed older versions of React packages as a preparatory step for upgrading to React 19. This commit does not introduce any functional changes, but removes dependencies on previous React versions, allowing for a cleaner upgrade path in subsequent commits.
- Updated dependencies
  - @backstage/core-components@0.16.4-next.0
  - @backstage/frontend-plugin-api@0.9.5-next.1
  - @backstage/core-plugin-api@1.10.4-next.0
  - @backstage/plugin-permission-react@0.4.31-next.0
  - @backstage/version-bridge@1.0.11-next.0
  - @backstage/plugin-catalog-react@1.15.2-next.1
  - @backstage/theme@0.6.4-next.0
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/types@1.2.1
  - @backstage/plugin-scaffolder-common@1.5.9

## 1.14.4-next.0

### Patch Changes

- 3edf7e7: Add schema output return type to the `makeFieldSchema` function return
- Updated dependencies
  - @backstage/frontend-plugin-api@0.9.5-next.0
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/core-components@0.16.3
  - @backstage/core-plugin-api@1.10.3
  - @backstage/theme@0.6.3
  - @backstage/types@1.2.1
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-catalog-react@1.15.2-next.0
  - @backstage/plugin-permission-react@0.4.30
  - @backstage/plugin-scaffolder-common@1.5.9

## 1.14.3

### Patch Changes

- 91bb99a: Fix field extension validation not working when field is in dependencies in an array field
- d8f9079: Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.
- 37421bc: Fixed scaffolder form fields not resolving correctly in the `useCustomFieldExtensions` hook.
- 4756287: Added support for `FormDecoratorBlueprint` to create form decorators in the Scaffolder plugin
- Updated dependencies
  - @backstage/plugin-catalog-react@1.15.1
  - @backstage/frontend-plugin-api@0.9.4
  - @backstage/core-plugin-api@1.10.3
  - @backstage/types@1.2.1
  - @backstage/core-components@0.16.3
  - @backstage/catalog-client@1.9.1
  - @backstage/catalog-model@1.7.3
  - @backstage/theme@0.6.3
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-permission-react@0.4.30
  - @backstage/plugin-scaffolder-common@1.5.9

## 1.14.3-next.2

### Patch Changes

- 91bb99a: Fix field extension validation not working when field is in dependencies in an array field
- Updated dependencies
  - @backstage/frontend-plugin-api@0.9.4-next.0
  - @backstage/core-plugin-api@1.10.3-next.0
  - @backstage/types@1.2.1-next.0
  - @backstage/plugin-catalog-react@1.15.1-next.1
  - @backstage/core-components@0.16.3-next.0
  - @backstage/plugin-permission-react@0.4.30-next.0
  - @backstage/catalog-model@1.7.3-next.0
  - @backstage/plugin-scaffolder-common@1.5.9-next.0
  - @backstage/catalog-client@1.9.1-next.0
  - @backstage/theme@0.6.3
  - @backstage/version-bridge@1.0.10

## 1.14.3-next.1

### Patch Changes

- d8f9079: Updated dependency `@rjsf/utils` to `5.23.2`.
  Updated dependency `@rjsf/core` to `5.23.2`.
  Updated dependency `@rjsf/material-ui` to `5.23.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.2`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.15.1-next.0

## 1.14.3-next.0

### Patch Changes

- 37421bc: Fixed scaffolder form fields not resolving correctly in the `useCustomFieldExtensions` hook.
- Updated dependencies
  - @backstage/catalog-client@1.9.0
  - @backstage/catalog-model@1.7.2
  - @backstage/core-components@0.16.2
  - @backstage/core-plugin-api@1.10.2
  - @backstage/frontend-plugin-api@0.9.3
  - @backstage/theme@0.6.3
  - @backstage/types@1.2.0
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-catalog-react@1.15.0
  - @backstage/plugin-permission-react@0.4.29
  - @backstage/plugin-scaffolder-common@1.5.8

## 1.14.2

### Patch Changes

- 3c62a50: Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks
- c4ffd13: Added the autocomplete feature to GitlabRepoUrlPicker
- 28e286f: Added test coverage selectors to TemplateCard and its sub-components
- c846d76: Updated dependency `flatted` to `3.3.2`.
- 9951ba4: Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.
- 97a13ad: Improve performance of typing into scaffolder secret widget
- 184161f: Scaffolder field extensions registered with `FormFieldBlueprint` are now collected in the `useCustomFieldExtensions` hook, enabling them for use in the scaffolder.
- b21a5ae: Open links in the scaffolder entity and step descriptions in a new tab, to ensure consistency and improve user experience
- Updated dependencies
  - @backstage/plugin-catalog-react@1.15.0
  - @backstage/plugin-scaffolder-common@1.5.8
  - @backstage/catalog-client@1.9.0
  - @backstage/frontend-plugin-api@0.9.3
  - @backstage/theme@0.6.3
  - @backstage/core-components@0.16.2
  - @backstage/catalog-model@1.7.2
  - @backstage/core-plugin-api@1.10.2
  - @backstage/types@1.2.0
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-permission-react@0.4.29

## 1.14.2-next.2

### Patch Changes

- 184161f: Scaffolder field extensions registered with `FormFieldBlueprint` are now collected in the `useCustomFieldExtensions` hook, enabling them for use in the scaffolder.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.14.3-next.2
  - @backstage/catalog-client@1.9.0-next.2
  - @backstage/catalog-model@1.7.2-next.0
  - @backstage/core-components@0.16.2-next.2
  - @backstage/core-plugin-api@1.10.2-next.0
  - @backstage/frontend-plugin-api@0.9.3-next.2
  - @backstage/theme@0.6.3-next.0
  - @backstage/types@1.2.0
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-permission-react@0.4.29-next.0
  - @backstage/plugin-scaffolder-common@1.5.8-next.1

## 1.14.2-next.1

### Patch Changes

- c846d76: Updated dependency `flatted` to `3.3.2`.
- b21a5ae: Open links in the scaffolder entity and step descriptions in a new tab, to ensure consistency and improve user experience
- Updated dependencies
  - @backstage/plugin-catalog-react@1.14.3-next.1
  - @backstage/catalog-client@1.9.0-next.1
  - @backstage/core-components@0.16.2-next.1
  - @backstage/catalog-model@1.7.1
  - @backstage/core-plugin-api@1.10.1
  - @backstage/frontend-plugin-api@0.9.3-next.1
  - @backstage/theme@0.6.3-next.0
  - @backstage/types@1.2.0
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-permission-react@0.4.28
  - @backstage/plugin-scaffolder-common@1.5.8-next.0

## 1.14.2-next.0

### Patch Changes

- 3c62a50: Experimental support for `formDecorators` to enable secret collection and mutations to the parameters for scaffolder tasks
- c4ffd13: Added the autocomplete feature to GitlabRepoUrlPicker
- 9951ba4: Updated dependency `@rjsf/utils` to `5.23.1`.
  Updated dependency `@rjsf/core` to `5.23.1`.
  Updated dependency `@rjsf/material-ui` to `5.23.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.23.1`.
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.8-next.0
  - @backstage/plugin-catalog-react@1.14.3-next.0
  - @backstage/frontend-plugin-api@0.9.3-next.0
  - @backstage/theme@0.6.3-next.0
  - @backstage/catalog-client@1.8.1-next.0
  - @backstage/catalog-model@1.7.1
  - @backstage/core-components@0.16.2-next.0
  - @backstage/core-plugin-api@1.10.1
  - @backstage/types@1.2.0
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-permission-react@0.4.28

## 1.14.0

### Minor Changes

- 69fb6e7: Fix `contextMenu` not being disabled bug in new scaffolder pages

### Patch Changes

- 8b5ff7e: Fix issue with form state not refreshing when updating
- ade301c: Fix issue with `Stepper` and trying to trim additional properties. This is now all behind `liveOmit` and `omitExtraData` instead.
- f61d4cc: Add scaffolder permission `scaffolder.template.management` for accessing the template management features
- Updated dependencies
  - @backstage/catalog-client@1.8.0
  - @backstage/theme@0.6.1
  - @backstage/types@1.2.0
  - @backstage/plugin-catalog-react@1.14.1
  - @backstage/plugin-scaffolder-common@1.5.7
  - @backstage/core-components@0.16.0
  - @backstage/catalog-model@1.7.1
  - @backstage/core-plugin-api@1.10.1
  - @backstage/frontend-plugin-api@0.9.1
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-permission-react@0.4.28

## 1.14.0-next.3

### Minor Changes

- 69fb6e7: Fix `contextMenu` not being disabled bug in new scaffolder pages

### Patch Changes

- f61d4cc: Add scaffolder permission `scaffolder.template.management` for accessing the template management features
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.7-next.0
  - @backstage/core-components@0.16.0-next.2
  - @backstage/plugin-catalog-react@1.14.1-next.3
  - @backstage/catalog-client@1.8.0-next.1
  - @backstage/catalog-model@1.7.0
  - @backstage/core-plugin-api@1.10.0
  - @backstage/frontend-plugin-api@0.9.1-next.2
  - @backstage/theme@0.6.1-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-permission-react@0.4.27

## 1.13.3-next.2

### Patch Changes

- Updated dependencies
  - @backstage/catalog-client@1.8.0-next.1
  - @backstage/plugin-catalog-react@1.14.1-next.2
  - @backstage/catalog-model@1.7.0
  - @backstage/core-components@0.16.0-next.1
  - @backstage/core-plugin-api@1.10.0
  - @backstage/frontend-plugin-api@0.9.1-next.1
  - @backstage/theme@0.6.1-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-permission-react@0.4.27
  - @backstage/plugin-scaffolder-common@1.5.6

## 1.13.3-next.1

### Patch Changes

- Updated dependencies
  - @backstage/theme@0.6.1-next.0
  - @backstage/catalog-client@1.8.0-next.0
  - @backstage/catalog-model@1.7.0
  - @backstage/core-components@0.16.0-next.1
  - @backstage/core-plugin-api@1.10.0
  - @backstage/frontend-plugin-api@0.9.1-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-catalog-react@1.14.1-next.1
  - @backstage/plugin-permission-react@0.4.27
  - @backstage/plugin-scaffolder-common@1.5.6

## 1.13.2-next.0

### Patch Changes

- 8b5ff7e: Fix issue with form state not refreshing when updating
- ade301c: Fix issue with `Stepper` and trying to trim additional properties. This is now all behind `liveOmit` and `omitExtraData` instead.
- Updated dependencies
  - @backstage/core-components@0.16.0-next.0
  - @backstage/catalog-client@1.8.0-next.0
  - @backstage/catalog-model@1.7.0
  - @backstage/core-plugin-api@1.10.0
  - @backstage/frontend-plugin-api@0.9.1-next.0
  - @backstage/theme@0.6.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-catalog-react@1.14.1-next.0
  - @backstage/plugin-permission-react@0.4.27
  - @backstage/plugin-scaffolder-common@1.5.6

## 1.13.0

### Minor Changes

- bf6eaf3: Added support for `FormFieldBlueprint` to create field extensions in the Scaffolder plugin
- d851b5b: Renamed Template Editor to Manage Templates.

### Patch Changes

- 341e5db: Add `overridableComponent` `BackstageTemplateStepperClassKey` to template stepper to enable custom styling
- 4b60e0c: Small tweaks to API reports to make them valid
- e969dc7: Move `@types/react` to a peer dependency.
- 785d68f: Add support for pagination in scaffolder tasks list
- b1de959: Scaffolder task routes require read permission to access. The tasks list option in the scaffolder page context menu only shows with permission.
- e698470: Updated dependency `@rjsf/utils` to `5.21.2`.
  Updated dependency `@rjsf/core` to `5.21.2`.
  Updated dependency `@rjsf/material-ui` to `5.21.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.2`.
- 11e0752: Make it possible to manually retry the scaffolder template from the step it failed
- Updated dependencies
  - @backstage/core-components@0.15.1
  - @backstage/frontend-plugin-api@0.9.0
  - @backstage/core-plugin-api@1.10.0
  - @backstage/plugin-permission-react@0.4.27
  - @backstage/version-bridge@1.0.10
  - @backstage/plugin-catalog-react@1.14.0
  - @backstage/theme@0.6.0
  - @backstage/catalog-client@1.7.1
  - @backstage/catalog-model@1.7.0
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.6

## 1.13.0-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.14.0-next.2
  - @backstage/theme@0.6.0-next.1
  - @backstage/catalog-client@1.7.1-next.0
  - @backstage/catalog-model@1.7.0
  - @backstage/core-components@0.15.1-next.2
  - @backstage/core-plugin-api@1.10.0-next.1
  - @backstage/frontend-plugin-api@0.9.0-next.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.10-next.0
  - @backstage/plugin-permission-react@0.4.27-next.1
  - @backstage/plugin-scaffolder-common@1.5.6

## 1.13.0-next.1

### Minor Changes

- d851b5b: Renamed Template Editor to Manage Templates.

### Patch Changes

- e969dc7: Move `@types/react` to a peer dependency.
- 785d68f: Add support for pagination in scaffolder tasks list
- Updated dependencies
  - @backstage/core-components@0.15.1-next.1
  - @backstage/frontend-plugin-api@0.9.0-next.1
  - @backstage/core-plugin-api@1.10.0-next.1
  - @backstage/plugin-permission-react@0.4.27-next.1
  - @backstage/version-bridge@1.0.10-next.0
  - @backstage/plugin-catalog-react@1.14.0-next.1
  - @backstage/theme@0.5.8-next.0
  - @backstage/catalog-client@1.7.0
  - @backstage/catalog-model@1.7.0
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.6

## 1.13.0-next.0

### Minor Changes

- bf6eaf3: Added support for `FormFieldBlueprint` to create field extensions in the Scaffolder plugin

### Patch Changes

- 11e0752: Make it possible to manually retry the scaffolder template from the step it failed
- Updated dependencies
  - @backstage/frontend-plugin-api@0.9.0-next.0
  - @backstage/core-components@0.15.1-next.0
  - @backstage/core-plugin-api@1.10.0-next.0
  - @backstage/plugin-catalog-react@1.13.1-next.0
  - @backstage/catalog-client@1.7.0
  - @backstage/catalog-model@1.7.0
  - @backstage/theme@0.5.7
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.9
  - @backstage/plugin-permission-react@0.4.27-next.0
  - @backstage/plugin-scaffolder-common@1.5.6

## 1.12.0

### Minor Changes

- 4512f71: Add `ui:backstage.review.name` option for custom item names on scaffolder review page, and also add support for rendering the `title` property instead of the key name.
- 4baad34: Added support for `omitExtraData` and `liveOmit` for rjsf in the scaffolder

### Patch Changes

- 1f3c5aa: Fix scaffolder review step issue where schema options are not handled for fields on multi-step templates.
- 836127c: Updated dependency `@testing-library/react` to `^16.0.0`.
- 0a50d44: Updated dependency `@rjsf/utils` to `5.21.1`.
  Updated dependency `@rjsf/core` to `5.21.1`.
  Updated dependency `@rjsf/material-ui` to `5.21.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.21.1`.
- fa9d8da: Updated dependency `@rjsf/utils` to `5.20.1`.
  Updated dependency `@rjsf/core` to `5.20.1`.
  Updated dependency `@rjsf/material-ui` to `5.20.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.20.1`.
- c2cbe1e: Updated dependency `use-immer` to `^0.10.0`.
- b0f0118: Remove unnecessary singleton wrapping of `scaffolderApiRef`.
- 3ebb64f: - Fix secret widget field not displaying as required.
  - Fix secret widget not able to be required inside nested objects.
  - Fix secret widget not able to be disabled.
  - Support `minLength` and `maxLength` properties for secret widget.
- 8dd6ef6: Fix an issue where keys with duplicate final key parts are not all displayed in the `ReviewState`. Change the way the keys are formatted to include the full schema path, separated by `>`.
- 9a0672a: Scaffolder review page shows static amount of asterisks for secret fields.
- Updated dependencies
  - @backstage/core-components@0.15.0
  - @backstage/plugin-catalog-react@1.13.0
  - @backstage/catalog-model@1.7.0
  - @backstage/catalog-client@1.7.0
  - @backstage/core-plugin-api@1.9.4
  - @backstage/theme@0.5.7
  - @backstage/version-bridge@1.0.9
  - @backstage/plugin-permission-react@0.4.26
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.6

## 1.12.0-next.2

### Minor Changes

- 4baad34: Added support for `omitExtraData` and `liveOmit` for rjsf in the scaffolder

### Patch Changes

- 1f3c5aa: Fix scaffolder review step issue where schema options are not handled for fields on multi-step templates.
- 836127c: Updated dependency `@testing-library/react` to `^16.0.0`.
- fa9d8da: Updated dependency `@rjsf/utils` to `5.20.1`.
  Updated dependency `@rjsf/core` to `5.20.1`.
  Updated dependency `@rjsf/material-ui` to `5.20.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.20.1`.
- Updated dependencies
  - @backstage/core-components@0.14.11-next.1
  - @backstage/plugin-catalog-react@1.13.0-next.2
  - @backstage/catalog-client@1.7.0-next.1
  - @backstage/core-plugin-api@1.9.4-next.0
  - @backstage/theme@0.5.7-next.0
  - @backstage/version-bridge@1.0.9-next.0
  - @backstage/plugin-permission-react@0.4.26-next.0
  - @backstage/catalog-model@1.6.0
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.5

## 1.12.0-next.1

### Patch Changes

- c2cbe1e: Updated dependency `use-immer` to `^0.10.0`.
- Updated dependencies
  - @backstage/catalog-client@1.6.7-next.0
  - @backstage/core-components@0.14.11-next.0
  - @backstage/plugin-catalog-react@1.12.4-next.1
  - @backstage/catalog-model@1.6.0
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-permission-react@0.4.25
  - @backstage/plugin-scaffolder-common@1.5.5

## 1.12.0-next.0

### Minor Changes

- 4512f71: Add `ui:backstage.review.name` option for custom item names on scaffolder review page, and also add support for rendering the `title` property instead of the key name.

### Patch Changes

- 3ebb64f: - Fix secret widget field not displaying as required.
  - Fix secret widget not able to be required inside nested objects.
  - Fix secret widget not able to be disabled.
  - Support `minLength` and `maxLength` properties for secret widget.
- 8dd6ef6: Fix an issue where keys with duplicate final key parts are not all displayed in the `ReviewState`. Change the way the keys are formatted to include the full schema path, separated by `>`.
- 9a0672a: Scaffolder review page shows static amount of asterisks for secret fields.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.4-next.0
  - @backstage/catalog-client@1.6.6
  - @backstage/catalog-model@1.6.0
  - @backstage/core-components@0.14.10
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-permission-react@0.4.25
  - @backstage/plugin-scaffolder-common@1.5.5

## 1.11.0

### Minor Changes

- 8839381: Add scaffolder option to display object items in separate rows on review page

### Patch Changes

- 072c00c: Fixed a bug in `DefaultTableOutputs` where output elements overlapped on smaller screen sizes
- 46e5e55: Change scaffolder widgets to use `TextField` component for more flexibility in theme overrides.
- d0e95a7: Add ability to customise form fields in the UI by exposing `uiSchema` and `formContext` in `FormProps`
- 4670f06: support `ajv-errors` for scaffolder validation to allow for customizing the error messages
- 04759f2: Fix null check in `isJsonObject` utility function for scaffolder review state component
- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.3
  - @backstage/core-components@0.14.10
  - @backstage/catalog-model@1.6.0
  - @backstage/catalog-client@1.6.6
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-permission-react@0.4.25
  - @backstage/plugin-scaffolder-common@1.5.5

## 1.11.0-next.3

### Patch Changes

- Updated dependencies
  - @backstage/catalog-model@1.6.0-next.0
  - @backstage/plugin-catalog-react@1.12.3-next.3
  - @backstage/catalog-client@1.6.6-next.0
  - @backstage/core-components@0.14.10-next.0
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-permission-react@0.4.25-next.1
  - @backstage/plugin-scaffolder-common@1.5.5-next.2

## 1.11.0-next.2

### Patch Changes

- 072c00c: Fixed a bug in `DefaultTableOutputs` where output elements overlapped on smaller screen sizes
- 04759f2: Fix null check in `isJsonObject` utility function for scaffolder review state component
- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.3-next.2
  - @backstage/plugin-permission-react@0.4.25-next.1
  - @backstage/plugin-scaffolder-common@1.5.5-next.1
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-components@0.14.10-next.0
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.11.0-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.3-next.1
  - @backstage/plugin-permission-react@0.4.25-next.0
  - @backstage/plugin-scaffolder-common@1.5.5-next.0
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-components@0.14.10-next.0
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.11.0-next.0

### Minor Changes

- 8839381: Add scaffolder option to display object items in separate rows on review page

### Patch Changes

- d0e95a7: Add ability to customise form fields in the UI by exposing `uiSchema` and `formContext` in `FormProps`
- 4670f06: support `ajv-errors` for scaffolder validation to allow for customizing the error messages
- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.3-next.0
  - @backstage/core-components@0.14.10-next.0
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-permission-react@0.4.24
  - @backstage/plugin-scaffolder-common@1.5.4

## 1.10.0

### Minor Changes

- 354e68c: Improve validation error display text in scaffolder
- b5deed0: Add support for `bitbucketCloud` autocomplete in `RepoUrlPicker`

### Patch Changes

- cc81579: Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.
- 4d7e11f: disables rendering of output box if no output is returned
- Updated dependencies
  - @backstage/core-components@0.14.9
  - @backstage/plugin-catalog-react@1.12.2
  - @backstage/plugin-permission-react@0.4.24
  - @backstage/plugin-scaffolder-common@1.5.4
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.10.0-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.9-next.1
  - @backstage/plugin-catalog-react@1.12.2-next.2

## 1.10.0-next.1

### Minor Changes

- 354e68c: Improve validation error display text in scaffolder

### Patch Changes

- cc81579: Updated dependency `@rjsf/utils` to `5.18.5`.
  Updated dependency `@rjsf/core` to `5.18.5`.
  Updated dependency `@rjsf/material-ui` to `5.18.5`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.5`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.2-next.1
  - @backstage/core-components@0.14.9-next.0
  - @backstage/core-plugin-api@1.9.3
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-permission-react@0.4.23
  - @backstage/plugin-scaffolder-common@1.5.3

## 1.10.0-next.0

### Minor Changes

- b5deed0: Add support for `bitbucketCloud` autocomplete in `RepoUrlPicker`

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.9-next.0
  - @backstage/plugin-catalog-react@1.12.2-next.0
  - @backstage/core-plugin-api@1.9.3
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/theme@0.5.6
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-permission-react@0.4.23
  - @backstage/plugin-scaffolder-common@1.5.3

## 1.9.0

### Minor Changes

- 62bd9eb: Replace `ui:widget: password` with the a warning message stating that it's not secure and to use the build in `SecretField`.

  You can do this by updating your `template.yaml` files that have the reference `ui:widget: password` to `ui:field: Secret` instead.

  ```diff
  apiVersion: backstage.io/v1alpha1
  kind: Template
  metadata:
    ...

  spec:
    parameters:
      - title: collect some information
        schema:
          type: object
          properties:
            password:
              title: Password
              type: string
  -            ui:widget: password
  +            ui:field: Secret
    steps:
      - id: collect-info
        name: Collect some information
        action: acme:do:something
        input:
  -        password: ${{ parameters.password }}
  +        password: ${{ secrets.password }}
  ```

### Patch Changes

- 86dc29d: Links that are rendered in the markdown in the `ScaffolderField` component are now opened in new tabs.
- d44a20a: Added additional plugin metadata to `package.json`.
- fa8560e: Prevents Autocomplete dropdown from overlapping sidebar on hovering it
- 6cb4886: Updated dependency `@rjsf/utils` to `5.18.4`.
  Updated dependency `@rjsf/core` to `5.18.4`.
  Updated dependency `@rjsf/material-ui` to `5.18.4`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.4`.
- 75dcd7e: Fixing bug in `formData` type as it should be `optional` as it's possibly undefined
- 928cfa0: Fixed a typo '

## 1.8.7-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- fa8560e: Prevents Autocomplete dropdown from overlapping sidebar on hovering it
- Updated dependencies
  - @backstage/core-components@0.14.8-next.2
  - @backstage/plugin-scaffolder-common@1.5.3-next.1
  - @backstage/plugin-permission-react@0.4.23-next.1
  - @backstage/plugin-catalog-react@1.12.1-next.2
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-plugin-api@1.9.3-next.0
  - @backstage/theme@0.5.6-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.8.7-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.8-next.1
  - @backstage/core-plugin-api@1.9.3-next.0
  - @backstage/plugin-catalog-react@1.12.1-next.1
  - @backstage/plugin-permission-react@0.4.23-next.0
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/theme@0.5.6-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-scaffolder-common@1.5.3-next.0

## 1.8.7-next.1

### Patch Changes

- 75dcd7e: Fixing bug in `formData` type as it should be `optional` as it's possibly undefined
- 928cfa0: Fixed a typo '

## 1.8.6-next.0

### Patch Changes

- 86dc29d: Links that are rendered in the markdown in the `ScaffolderField` component are now opened in new tabs.
- Updated dependencies
  - @backstage/theme@0.5.6-next.0
  - @backstage/core-components@0.14.8-next.0
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-plugin-api@1.9.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-catalog-react@1.12.1-next.0
  - @backstage/plugin-scaffolder-common@1.5.2

## 1.8.5

### Patch Changes

- 9156654: Capturing more event clicks for scaffolder
- 0040ec2: Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.2
  - @backstage/core-components@0.14.7
  - @backstage/catalog-model@1.5.0
  - @backstage/plugin-catalog-react@1.12.0
  - @backstage/theme@0.5.4
  - @backstage/catalog-client@1.6.5

## 1.8.5-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.0-next.2
  - @backstage/core-components@0.14.7-next.2

## 1.8.5-next.1

### Patch Changes

- 9156654: Capturing more event clicks for scaffolder
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.2-next.1
  - @backstage/core-components@0.14.6-next.1
  - @backstage/plugin-catalog-react@1.11.4-next.1

## 1.8.5-next.0

### Patch Changes

- 0040ec2: Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- Updated dependencies
  - @backstage/catalog-model@1.5.0-next.0
  - @backstage/theme@0.5.4-next.0
  - @backstage/core-components@0.14.5-next.0
  - @backstage/catalog-client@1.6.5-next.0
  - @backstage/plugin-catalog-react@1.11.4-next.0
  - @backstage/plugin-scaffolder-common@1.5.2-next.0
  - @backstage/core-plugin-api@1.9.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.8.4

### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 0e692cf: Added ESLint rule `no-top-level-material-ui-4-imports` to migrate the Material UI imports.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

- Updated dependencies
  - @backstage/plugin-catalog-react@1.11.3
  - @backstage/core-components@0.14.4
  - @backstage/core-plugin-api@1.9.2
  - @backstage/theme@0.5.3
  - @backstage/version-bridge@1.0.8
  - @backstage/catalog-client@1.6.4
  - @backstage/catalog-model@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.4-next.1

### Patch Changes

- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

- Updated dependencies
  - @backstage/catalog-client@1.6.4-next.0
  - @backstage/catalog-model@1.4.5
  - @backstage/core-components@0.14.4-next.0
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.11.3-next.1
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.4-next.0
  - @backstage/catalog-client@1.6.3
  - @backstage/catalog-model@1.4.5
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.11.3-next.0
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.3

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.3
  - @backstage/core-components@0.14.3
  - @backstage/plugin-catalog-react@1.11.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.2

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.1

### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- Updated dependencies
  - @backstage/core-components@0.14.1
  - @backstage/theme@0.5.2
  - @backstage/plugin-catalog-react@1.11.0
  - @backstage/catalog-client@1.6.1
  - @backstage/catalog-model@1.4.5
  - @backstage/core-plugin-api@1.9.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.1-next.2
  - @backstage/plugin-catalog-react@1.11.0-next.2
  - @backstage/catalog-client@1.6.1-next.1
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/core-plugin-api@1.9.1-next.1
  - @backstage/theme@0.5.2-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 1.8.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.1-next.1
  - @backstage/plugin-catalog-react@1.10.1-next.1
  - @backstage/core-plugin-api@1.9.1-next.1
  - @backstage/catalog-client@1.6.1-next.0
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/theme@0.5.2-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 1.8.1-next.0

### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- Updated dependencies
  - @backstage/theme@0.5.2-next.0
  - @backstage/core-components@0.14.1-next.0
  - @backstage/plugin-catalog-react@1.10.1-next.0
  - @backstage/catalog-client@1.6.1-next.0
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/core-plugin-api@1.9.1-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.0

## 1.8.0

### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.
- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 0b0c6b6: Allow defining default output text to be shown
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- 3dff4b0: Remove unused deps
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links
- Updated dependencies
  - @backstage/plugin-catalog-react@1.10.0
  - @backstage/core-components@0.14.0
  - @backstage/catalog-model@1.4.4
  - @backstage/theme@0.5.1
  - @backstage/core-plugin-api@1.9.0
  - @backstage/catalog-client@1.6.0
  - @backstage/plugin-scaffolder-common@1.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.8.0-next.3

### Patch Changes

- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- Updated dependencies
  - @backstage/theme@0.5.1-next.1
  - @backstage/core-components@0.14.0-next.2
  - @backstage/plugin-catalog-react@1.10.0-next.3
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/core-plugin-api@1.9.0-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.2

### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links
- Updated dependencies
  - @backstage/core-components@0.14.0-next.1
  - @backstage/core-plugin-api@1.9.0-next.1
  - @backstage/plugin-catalog-react@1.10.0-next.2
  - @backstage/theme@0.5.1-next.0
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.1

### Minor Changes

- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- Updated dependencies
  - @backstage/core-components@0.14.0-next.0
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/core-plugin-api@1.8.3-next.0
  - @backstage/plugin-catalog-react@1.9.4-next.1
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.0

### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.

### Patch Changes

- 0b0c6b6: Allow defining default output text to be shown
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.4-next.0
  - @backstage/catalog-client@1.6.0-next.0
  - @backstage/plugin-scaffolder-common@1.5.0-next.0
  - @backstage/core-components@0.13.10
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.2
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.7.1

### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 0b9ce2b: Fix for a step with no properties
- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- 4016f21: Remove some unused dependencies
- d16f85f: Show first scaffolder output text by default
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.7.1-next.2

### Patch Changes

- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.3-next.2

## 1.7.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2-next.0
  - @backstage/core-components@0.13.10-next.1
  - @backstage/plugin-catalog-react@1.9.3-next.1
  - @backstage/catalog-client@1.5.2-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.7.1-next.0

### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10-next.0
  - @backstage/catalog-client@1.5.2-next.0
  - @backstage/plugin-catalog-react@1.9.3-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.1
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.7.0

### Minor Changes

- 33edf50: Added support for dealing with user provided secrets using a new field extension `ui:field: Secret`

### Patch Changes

- 670c7cc: Fix bug where `properties` is set to empty object when it should be empty for schema dependencies
- fa66d1b: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- e516bf4: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3: Minor updates for TypeScript 5.2.2+ compatibility
- 2aee53b: Add horizontal slider if stepper overflows
- 2b72591: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- 6cd12f2: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.
- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- 63c494e: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- c8908d4: Use new option from RJSF 5.15
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- 5bb5240: Fixed issue for showing undefined for hidden form items
- Updated dependencies
  - @backstage/core-plugin-api@1.8.1
  - @backstage/plugin-catalog-react@1.9.2
  - @backstage/core-components@0.13.9
  - @backstage/theme@0.5.0
  - @backstage/catalog-client@1.5.0
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.6.2-next.3

### Patch Changes

- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- c8908d4: Use new option from RJSF 5.15
- Updated dependencies
  - @backstage/core-components@0.13.9-next.3
  - @backstage/catalog-client@1.5.0-next.1
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.9.2-next.3
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.2

### Patch Changes

- 5bb5240: Fixed issue for showing undefined for hidden form items
- Updated dependencies
  - @backstage/theme@0.5.0-next.1
  - @backstage/plugin-catalog-react@1.9.2-next.2
  - @backstage/catalog-client@1.5.0-next.1
  - @backstage/catalog-model@1.4.3
  - @backstage/core-components@0.13.9-next.2
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.1

### Patch Changes

- fa66d1b5b3: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- 2aee53bbeb: Add horizontal slider if stepper overflows
- 2b725913c1: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- a518c5a25b: Updated dependency `@react-hookz/web` to `^23.0.0`.
- Updated dependencies
  - @backstage/core-components@0.13.9-next.1
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/plugin-catalog-react@1.9.2-next.1
  - @backstage/catalog-client@1.5.0-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.0

### Patch Changes

- e516bf4da8: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3bc9: Minor updates for TypeScript 5.2.2+ compatibility
- 6cd12f277b: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- 63c494ef22: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- Updated dependencies
  - @backstage/core-plugin-api@1.8.1-next.0
  - @backstage/plugin-catalog-react@1.9.2-next.0
  - @backstage/core-components@0.13.9-next.0
  - @backstage/theme@0.5.0-next.0
  - @backstage/catalog-client@1.4.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.0

### Minor Changes

- 3fdffbb699: Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

### Patch Changes

- 6c2b872153: Add official support for React 18.
- 171a99816b: Fixed `backstage:featureFlag` in `scaffolder/next` by sorting out `manifest.steps`.
- c838da0edd: Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- 69c14904b6: Use `EntityRefLinks` with `hideIcons` property to avoid double icons
- 62b5922916: Internal theme type updates
- dda56ae265: Preserve step's time execution for a non-running task.
- 76d07da66a: Make it possible to define control buttons text (Back, Create, Review) per template
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.0
  - @backstage/core-components@0.13.8
  - @backstage/plugin-scaffolder-common@1.4.3
  - @backstage/core-plugin-api@1.8.0
  - @backstage/version-bridge@1.0.7
  - @backstage/theme@0.4.4
  - @backstage/catalog-client@1.4.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## 1.6.0-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.8-next.2
  - @backstage/plugin-catalog-react@1.9.0-next.2

## 1.6.0-next.1

### Patch Changes

- 62b5922916: Internal theme type updates
- 76d07da66a: Make it possible to define control buttons text (Back, Create, Review) per template
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.0-next.1
  - @backstage/plugin-scaffolder-common@1.4.3-next.1
  - @backstage/core-components@0.13.8-next.1
  - @backstage/catalog-client@1.4.5
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.0-next.0
  - @backstage/errors@1.2.3
  - @backstage/theme@0.4.4-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7-next.0

## 1.6.0-next.0

### Minor Changes

- 3fdffbb699: Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

### Patch Changes

- 6c2b872153: Add official support for React 18.
- Updated dependencies
  - @backstage/core-components@0.13.7-next.0
  - @backstage/plugin-scaffolder-common@1.4.3-next.0
  - @backstage/plugin-catalog-react@1.9.0-next.0
  - @backstage/core-plugin-api@1.8.0-next.0
  - @backstage/version-bridge@1.0.7-next.0
  - @backstage/theme@0.4.4-next.0
  - @backstage/catalog-client@1.4.5
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## 1.5.6

### Patch Changes

- 9a1fce352e: Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- f95af4e540: Updated dependency `@testing-library/dom` to `^9.0.0`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.5
  - @backstage/core-plugin-api@1.7.0
  - @backstage/core-components@0.13.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/version-bridge@1.0.6
  - @backstage/theme@0.4.3
  - @backstage/catalog-client@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.4.2

## 1.5.6-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.6-next.2
  - @backstage/core-plugin-api@1.7.0-next.1
  - @backstage/catalog-model@1.4.3-next.0
  - @backstage/plugin-catalog-react@1.8.5-next.2
  - @backstage/errors@1.2.3-next.0
  - @backstage/theme@0.4.3-next.0
  - @backstage/catalog-client@1.4.5-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.2-next.0

## 1.5.6-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.6-next.1
  - @backstage/plugin-catalog-react@1.8.5-next.1
  - @backstage/core-plugin-api@1.7.0-next.0
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/errors@1.2.2
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.1

## 1.5.6-next.0

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.5-next.0
  - @backstage/core-plugin-api@1.7.0-next.0
  - @backstage/core-components@0.13.6-next.0
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/errors@1.2.2
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.1

## 1.5.5

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.4
  - @backstage/core-components@0.13.5
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/core-plugin-api@1.6.0
  - @backstage/errors@1.2.2
  - @backstage/plugin-scaffolder-common@1.4.1
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5

## 1.5.5-next.3

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- Updated dependencies
  - @backstage/catalog-client@1.4.4-next.2
  - @backstage/catalog-model@1.4.2-next.2
  - @backstage/core-components@0.13.5-next.3
  - @backstage/core-plugin-api@1.6.0-next.3
  - @backstage/errors@1.2.2-next.0
  - @backstage/plugin-catalog-react@1.8.4-next.3
  - @backstage/plugin-scaffolder-common@1.4.1-next.2
  - @backstage/theme@0.4.2-next.0
  - @backstage/types@1.1.1-next.0
  - @backstage/version-bridge@1.0.5-next.0

## 1.5.5-next.2

### Patch Changes

- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.
- Updated dependencies
  - @backstage/core-components@0.13.5-next.2
  - @backstage/core-plugin-api@1.6.0-next.2
  - @backstage/plugin-catalog-react@1.8.4-next.2
  - @backstage/catalog-model@1.4.2-next.1
  - @backstage/catalog-client@1.4.4-next.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.4.1-next.1

## 1.5.5-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.4-next.1
  - @backstage/core-components@0.13.5-next.1
  - @backstage/catalog-model@1.4.2-next.0
  - @backstage/core-plugin-api@1.6.0-next.1
  - @backstage/catalog-client@1.4.4-next.0
  - @backstage/plugin-scaffolder-common@1.4.1-next.0
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4

## 1.5.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.6.0-next.0
  - @backstage/core-components@0.13.5-next.0
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.8.3-next.0
  - @backstage/plugin-scaffolder-common@1.4.0

## 1.5.2

### Patch Changes

- ba9ee98a37bd: Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.
- Updated dependencies
  - @backstage/core-components@0.13.4
  - @backstage/plugin-catalog-react@1.8.1
  - @backstage/plugin-scaffolder-common@1.4.0
  - @backstage/core-plugin-api@1.5.3
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4

## 1.5.2-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.1-next.1

## 1.5.2-next.0

### Patch Changes

- ba9ee98a37bd: Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.
- Updated dependencies
  - @backstage/core-components@0.13.4-next.0
  - @backstage/core-plugin-api@1.5.3
  - @backstage/plugin-catalog-react@1.8.1-next.0
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2

## 1.5.1

### Patch Changes

- f74a27de4d2c: Made markdown description theme-able
- Updated dependencies
  - @backstage/theme@0.4.1
  - @backstage/errors@1.2.1
  - @backstage/plugin-catalog-react@1.8.0
  - @backstage/core-components@0.13.3
  - @backstage/core-plugin-api@1.5.3
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2

## 1.5.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.0-next.2
  - @backstage/theme@0.4.1-next.1
  - @backstage/core-plugin-api@1.5.3-next.1
  - @backstage/core-components@0.13.3-next.2
  - @backstage/catalog-client@1.4.3-next.0
  - @backstage/catalog-model@1.4.1-next.0
  - @backstage/errors@1.2.1-next.0
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2-next.0

## 1.5.1-next.1

### Patch Changes

- f74a27de4d2c: Made markdown description theme-able
- Updated dependencies
  - @backstage/theme@0.4.1-next.0
  - @backstage/core-components@0.13.3-next.1
  - @backstage/core-plugin-api@1.5.3-next.0
  - @backstage/plugin-catalog-react@1.7.1-next.1

## 1.5.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/errors@1.2.1-next.0
  - @backstage/core-components@0.13.3-next.0
  - @backstage/catalog-client@1.4.3-next.0
  - @backstage/catalog-model@1.4.1-next.0
  - @backstage/core-plugin-api@1.5.2
  - @backstage/theme@0.4.0
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.7.1-next.0
  - @backstage/plugin-scaffolder-common@1.3.2-next.0

## 1.5.0

### Minor Changes

- 6b571405f806: `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- 4505dc3b4598: `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- a452bda74d7a: Fixed typescript casting bug for useTemplateParameterSchema hook
- 6b571405f806: `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

### Patch Changes

- 84a5c7724c7e: fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- cf34311cdbe1: Extract `ui:*` fields from conditional `then` and `else` schema branches.
- 2ff94da135a4: bump `rjsf` dependencies to 5.7.3
- 74b216ee4e50: Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.
- Updated dependencies
  - @backstage/core-plugin-api@1.5.2
  - @backstage/catalog-client@1.4.2
  - @backstage/core-components@0.13.2
  - @backstage/types@1.1.0
  - @backstage/theme@0.4.0
  - @backstage/plugin-catalog-react@1.7.0
  - @backstage/catalog-model@1.4.0
  - @backstage/errors@1.2.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.1

## 1.5.0-next.3

### Minor Changes

- a452bda74d7a: Fixed typescript casting bug for useTemplateParameterSchema hook

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.2-next.3
  - @backstage/catalog-model@1.4.0-next.1
  - @backstage/catalog-client@1.4.2-next.2
  - @backstage/core-plugin-api@1.5.2-next.0
  - @backstage/errors@1.2.0-next.0
  - @backstage/theme@0.4.0-next.1
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.7.0-next.3
  - @backstage/plugin-scaffolder-common@1.3.1-next.1

## 1.5.0-next.2

### Patch Changes

- cf34311cdbe1: Extract `ui:*` fields from conditional `then` and `else` schema branches.
- 2ff94da135a4: bump `rjsf` dependencies to 5.7.3
- Updated dependencies
  - @backstage/theme@0.4.0-next.1
  - @backstage/plugin-catalog-react@1.7.0-next.2
  - @backstage/core-components@0.13.2-next.2
  - @backstage/core-plugin-api@1.5.2-next.0

## 1.5.0-next.1

### Minor Changes

- 6b571405f806: `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- 4505dc3b4598: `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- 6b571405f806: `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

### Patch Changes

- 74b216ee4e50: Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.
- Updated dependencies
  - @backstage/errors@1.2.0-next.0
  - @backstage/core-components@0.13.2-next.1
  - @backstage/plugin-catalog-react@1.7.0-next.1
  - @backstage/catalog-model@1.4.0-next.0
  - @backstage/core-plugin-api@1.5.2-next.0
  - @backstage/catalog-client@1.4.2-next.1
  - @backstage/plugin-scaffolder-common@1.3.1-next.0
  - @backstage/theme@0.4.0-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4

## 1.4.1-next.0

### Patch Changes

- 84a5c7724c7e: fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- Updated dependencies
  - @backstage/catalog-client@1.4.2-next.0
  - @backstage/plugin-catalog-react@1.7.0-next.0
  - @backstage/theme@0.4.0-next.0
  - @backstage/core-components@0.13.2-next.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-model@1.3.0
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.0

## 1.4.0

### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

- Updated dependencies
  - @backstage/theme@0.3.0
  - @backstage/plugin-catalog-react@1.6.0
  - @backstage/plugin-scaffolder-common@1.3.0
  - @backstage/core-components@0.13.1
  - @backstage/catalog-client@1.4.1
  - @backstage/catalog-model@1.3.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4

## 1.4.0-next.2

### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

### Patch Changes

- Updated dependencies
  - @backstage/theme@0.3.0-next.0
  - @backstage/plugin-scaffolder-common@1.3.0-next.0
  - @backstage/core-components@0.13.1-next.1
  - @backstage/plugin-catalog-react@1.6.0-next.2
  - @backstage/core-plugin-api@1.5.1

## 1.3.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.1-next.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/plugin-catalog-react@1.6.0-next.1

## 1.3.1-next.0

### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

- Updated dependencies
  - @backstage/plugin-catalog-react@1.6.0-next.0
  - @backstage/core-components@0.13.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-client@1.4.1
  - @backstage/catalog-model@1.3.0
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.2.7

## 1.3.0

### Minor Changes

- 259d3407b9b: Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- 2cfd03d7376: To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- 48da4c46e45: `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

### Patch Changes

- 7e1d900413a: `scaffolder/next`: Bump `@rjsf/*` dependencies to 5.5.2
- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- 0435174b06f: Accessibility issues identified using lighthouse fixed.
- 7a6b16cc506: `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- 90dda42cfd2: bug: Invert `templateFilter` predicate to align with `Array.filter`
- d2488f5e54c: Add an indication that the validators are running when clicking `next` on each step of the form.
- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- 8c40997df44: Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- f84fc7fd040: Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- 34dab7ee7f8: `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- e0c6e8b9c3c: Update peer dependencies
- cf71c3744a5: scaffolder/next: Bump `@rjsf/*` dependencies to 5.6.0
- Updated dependencies
  - @backstage/core-components@0.13.0
  - @backstage/plugin-scaffolder-common@1.2.7
  - @backstage/catalog-client@1.4.1
  - @backstage/plugin-catalog-react@1.5.0
  - @backstage/theme@0.2.19
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-model@1.3.0
  - @backstage/version-bridge@1.0.4
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 1.3.0-next.3

### Patch Changes

- d2488f5e54c: Add indication that the validators are running
- 8c40997df44: Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.5.0-next.3
  - @backstage/catalog-model@1.3.0-next.0
  - @backstage/core-components@0.13.0-next.3
  - @backstage/catalog-client@1.4.1-next.1
  - @backstage/core-plugin-api@1.5.1-next.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-scaffolder-common@1.2.7-next.2

## 1.3.0-next.2

### Patch Changes

- 90dda42cfd2: bug: Invert `templateFilter` predicate to align with `Array.filter`
- 34dab7ee7f8: `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- Updated dependencies
  - @backstage/catalog-client@1.4.1-next.0
  - @backstage/core-components@0.12.6-next.2
  - @backstage/plugin-catalog-react@1.4.1-next.2
  - @backstage/core-plugin-api@1.5.1-next.1
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-scaffolder-common@1.2.7-next.1

## 1.3.0-next.1

### Patch Changes

- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @backstage/core-components@0.12.6-next.1
  - @backstage/plugin-scaffolder-common@1.2.7-next.1
  - @backstage/core-plugin-api@1.5.1-next.0
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-catalog-react@1.4.1-next.1
  - @backstage/theme@0.2.19-next.0
  - @backstage/catalog-client@1.4.0
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 1.3.0-next.0

### Minor Changes

- 259d3407b9b: Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- 2cfd03d7376: To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- 48da4c46e45: `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

### Patch Changes

- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- 7a6b16cc506: `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- f84fc7fd040: Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.2.7-next.0
  - @backstage/core-components@0.12.6-next.0
  - @backstage/plugin-catalog-react@1.4.1-next.0
  - @backstage/core-plugin-api@1.5.0
  - @backstage/catalog-client@1.4.0
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.18
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3

## 1.2.0

### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- c8d78b9ae9d: fix bug with `hasErrors` returning false when dealing with empty objects
- 9b8c374ace5: Remove timer for skipped steps in Scaffolder Next's TaskSteps
- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- d9893263ba9: scaffolder/next: Fix for steps without properties
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- cc418d652a7: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec42: Fix alignment bug for owners on `TemplateCard`
- Updated dependencies
  - @backstage/catalog-client@1.4.0
  - @backstage/core-components@0.12.5
  - @backstage/plugin-catalog-react@1.4.0
  - @backstage/errors@1.1.5
  - @backstage/core-plugin-api@1.5.0
  - @backstage/catalog-model@1.2.1
  - @backstage/theme@0.2.18
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6

## 1.2.0-next.2

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- d9893263ba9: scaffolder/next: Fix for steps without properties
- Updated dependencies
  - @backstage/core-components@0.12.5-next.2
  - @backstage/plugin-catalog-react@1.4.0-next.2
  - @backstage/core-plugin-api@1.5.0-next.2

## 1.2.0-next.1

### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

### Patch Changes

- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- Updated dependencies
  - @backstage/core-components@0.12.5-next.1
  - @backstage/errors@1.1.5-next.0
  - @backstage/catalog-client@1.4.0-next.1
  - @backstage/core-plugin-api@1.4.1-next.1
  - @backstage/theme@0.2.18-next.0
  - @backstage/plugin-catalog-react@1.4.0-next.1
  - @backstage/catalog-model@1.2.1-next.1
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6-next.1

## 1.1.1-next.0

### Patch Changes

- c8d78b9ae9: fix bug with `hasErrors` returning false when dealing with empty objects
- 928a12a9b3: Internal refactor of `/alpha` exports.
- cc418d652a: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec4: Fix alignment bug for owners on `TemplateCard`
- Updated dependencies
  - @backstage/catalog-client@1.4.0-next.0
  - @backstage/plugin-catalog-react@1.4.0-next.0
  - @backstage/core-plugin-api@1.4.1-next.0
  - @backstage/catalog-model@1.2.1-next.0
  - @backstage/core-components@0.12.5-next.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.17
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6-next.0

## 1.1.0

### Minor Changes

- a07750745b: Added `DescriptionField` field override to the `next/scaffolder`
- a521379688: Migrating the `TemplateEditorPage` to work with the new components from `@backstage/plugin-scaffolder-react`
- 8c2966536b: Embed scaffolder workflow in other components
- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- Updated dependencies
  - @backstage/core-components@0.12.4
  - @backstage/catalog-model@1.2.0
  - @backstage/theme@0.2.17
  - @backstage/core-plugin-api@1.4.0
  - @backstage/plugin-catalog-react@1.3.0
  - @backstage/catalog-client@1.3.1
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.5

## 1.1.0-next.2

### Minor Changes

- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

### Patch Changes

- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- Updated dependencies
  - @backstage/catalog-model@1.2.0-next.1
  - @backstage/core-components@0.12.4-next.1
  - @backstage/catalog-client@1.3.1-next.1
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-catalog-react@1.3.0-next.2
  - @backstage/plugin-scaffolder-common@1.2.5-next.1

## 1.1.0-next.1

### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- Updated dependencies
  - @backstage/core-components@0.12.4-next.0
  - @backstage/plugin-catalog-react@1.3.0-next.1
  - @backstage/catalog-client@1.3.1-next.0
  - @backstage/catalog-model@1.1.6-next.0
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.5-next.0

## 1.1.0-next.0

### Minor Changes

- 8c2966536b: Embed scaffolder workflow in other components

### Patch Changes

- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- Updated dependencies
  - @backstage/plugin-catalog-react@1.3.0-next.0
  - @backstage/catalog-model@1.1.6-next.0
  - @backstage/catalog-client@1.3.1-next.0
  - @backstage/plugin-scaffolder-common@1.2.5-next.0

## 1.0.0

### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

### Patch Changes

- Updated dependencies
  - @backstage/catalog-model@1.1.5
  - @backstage/plugin-scaffolder-common@1.2.4
  - @backstage/catalog-client@1.3.0
  - @backstage/plugin-catalog-react@1.2.4
  - @backstage/core-components@0.12.3
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3

## 1.0.0-next.0

### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.3.0-next.1
  - @backstage/catalog-client@1.3.0-next.2
  - @backstage/plugin-catalog-react@1.2.4-next.2
  - @backstage/catalog-model@1.1.5-next.1
  - @backstage/core-components@0.12.3-next.2
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.4-next.1
    in the review step label
- bcec60f: updated the ContextMenu, ActionsPage, OngoingTask and TemplateCard frontend components to support the new scaffolder permissions:

  - `scaffolder.task.create`
  - `scaffolder.task.cancel`
  - `scaffolder.task.read`

- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.3-next.0
  - @backstage/plugin-catalog-react@1.12.1-next.0

## 1.8.6-next.0

### Patch Changes

- 86dc29d: Links that are rendered in the markdown in the `ScaffolderField` component are now opened in new tabs.
- Updated dependencies
  - @backstage/theme@0.5.6-next.0
  - @backstage/core-components@0.14.8-next.0
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-plugin-api@1.9.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-catalog-react@1.12.1-next.0
  - @backstage/plugin-scaffolder-common@1.5.2

## 1.8.5

### Patch Changes

- 9156654: Capturing more event clicks for scaffolder
- 0040ec2: Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.2
  - @backstage/core-components@0.14.7
  - @backstage/catalog-model@1.5.0
  - @backstage/plugin-catalog-react@1.12.0
  - @backstage/theme@0.5.4
  - @backstage/catalog-client@1.6.5

## 1.8.5-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.0-next.2
  - @backstage/core-components@0.14.7-next.2

## 1.8.5-next.1

### Patch Changes

- 9156654: Capturing more event clicks for scaffolder
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.2-next.1
  - @backstage/core-components@0.14.6-next.1
  - @backstage/plugin-catalog-react@1.11.4-next.1

## 1.8.5-next.0

### Patch Changes

- 0040ec2: Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- Updated dependencies
  - @backstage/catalog-model@1.5.0-next.0
  - @backstage/theme@0.5.4-next.0
  - @backstage/core-components@0.14.5-next.0
  - @backstage/catalog-client@1.6.5-next.0
  - @backstage/plugin-catalog-react@1.11.4-next.0
  - @backstage/plugin-scaffolder-common@1.5.2-next.0
  - @backstage/core-plugin-api@1.9.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.8.4

### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 0e692cf: Added ESLint rule `no-top-level-material-ui-4-imports` to migrate the Material UI imports.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

- Updated dependencies
  - @backstage/plugin-catalog-react@1.11.3
  - @backstage/core-components@0.14.4
  - @backstage/core-plugin-api@1.9.2
  - @backstage/theme@0.5.3
  - @backstage/version-bridge@1.0.8
  - @backstage/catalog-client@1.6.4
  - @backstage/catalog-model@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.4-next.1

### Patch Changes

- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

- Updated dependencies
  - @backstage/catalog-client@1.6.4-next.0
  - @backstage/catalog-model@1.4.5
  - @backstage/core-components@0.14.4-next.0
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.11.3-next.1
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.4-next.0
  - @backstage/catalog-client@1.6.3
  - @backstage/catalog-model@1.4.5
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.11.3-next.0
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.3

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.3
  - @backstage/core-components@0.14.3
  - @backstage/plugin-catalog-react@1.11.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.2

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.1

### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- Updated dependencies
  - @backstage/core-components@0.14.1
  - @backstage/theme@0.5.2
  - @backstage/plugin-catalog-react@1.11.0
  - @backstage/catalog-client@1.6.1
  - @backstage/catalog-model@1.4.5
  - @backstage/core-plugin-api@1.9.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.1-next.2
  - @backstage/plugin-catalog-react@1.11.0-next.2
  - @backstage/catalog-client@1.6.1-next.1
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/core-plugin-api@1.9.1-next.1
  - @backstage/theme@0.5.2-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 1.8.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.1-next.1
  - @backstage/plugin-catalog-react@1.10.1-next.1
  - @backstage/core-plugin-api@1.9.1-next.1
  - @backstage/catalog-client@1.6.1-next.0
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/theme@0.5.2-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 1.8.1-next.0

### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- Updated dependencies
  - @backstage/theme@0.5.2-next.0
  - @backstage/core-components@0.14.1-next.0
  - @backstage/plugin-catalog-react@1.10.1-next.0
  - @backstage/catalog-client@1.6.1-next.0
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/core-plugin-api@1.9.1-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.0

## 1.8.0

### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.
- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 0b0c6b6: Allow defining default output text to be shown
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- 3dff4b0: Remove unused deps
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links
- Updated dependencies
  - @backstage/plugin-catalog-react@1.10.0
  - @backstage/core-components@0.14.0
  - @backstage/catalog-model@1.4.4
  - @backstage/theme@0.5.1
  - @backstage/core-plugin-api@1.9.0
  - @backstage/catalog-client@1.6.0
  - @backstage/plugin-scaffolder-common@1.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.8.0-next.3

### Patch Changes

- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- Updated dependencies
  - @backstage/theme@0.5.1-next.1
  - @backstage/core-components@0.14.0-next.2
  - @backstage/plugin-catalog-react@1.10.0-next.3
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/core-plugin-api@1.9.0-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.2

### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links
- Updated dependencies
  - @backstage/core-components@0.14.0-next.1
  - @backstage/core-plugin-api@1.9.0-next.1
  - @backstage/plugin-catalog-react@1.10.0-next.2
  - @backstage/theme@0.5.1-next.0
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.1

### Minor Changes

- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- Updated dependencies
  - @backstage/core-components@0.14.0-next.0
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/core-plugin-api@1.8.3-next.0
  - @backstage/plugin-catalog-react@1.9.4-next.1
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.0

### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.

### Patch Changes

- 0b0c6b6: Allow defining default output text to be shown
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.4-next.0
  - @backstage/catalog-client@1.6.0-next.0
  - @backstage/plugin-scaffolder-common@1.5.0-next.0
  - @backstage/core-components@0.13.10
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.2
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.7.1

### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 0b9ce2b: Fix for a step with no properties
- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- 4016f21: Remove some unused dependencies
- d16f85f: Show first scaffolder output text by default
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.7.1-next.2

### Patch Changes

- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.3-next.2

## 1.7.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2-next.0
  - @backstage/core-components@0.13.10-next.1
  - @backstage/plugin-catalog-react@1.9.3-next.1
  - @backstage/catalog-client@1.5.2-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.7.1-next.0

### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10-next.0
  - @backstage/catalog-client@1.5.2-next.0
  - @backstage/plugin-catalog-react@1.9.3-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.1
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.7.0

### Minor Changes

- 33edf50: Added support for dealing with user provided secrets using a new field extension `ui:field: Secret`

### Patch Changes

- 670c7cc: Fix bug where `properties` is set to empty object when it should be empty for schema dependencies
- fa66d1b: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- e516bf4: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3: Minor updates for TypeScript 5.2.2+ compatibility
- 2aee53b: Add horizontal slider if stepper overflows
- 2b72591: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- 6cd12f2: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.
- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- 63c494e: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- c8908d4: Use new option from RJSF 5.15
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- 5bb5240: Fixed issue for showing undefined for hidden form items
- Updated dependencies
  - @backstage/core-plugin-api@1.8.1
  - @backstage/plugin-catalog-react@1.9.2
  - @backstage/core-components@0.13.9
  - @backstage/theme@0.5.0
  - @backstage/catalog-client@1.5.0
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.6.2-next.3

### Patch Changes

- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- c8908d4: Use new option from RJSF 5.15
- Updated dependencies
  - @backstage/core-components@0.13.9-next.3
  - @backstage/catalog-client@1.5.0-next.1
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.9.2-next.3
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.2

### Patch Changes

- 5bb5240: Fixed issue for showing undefined for hidden form items
- Updated dependencies
  - @backstage/theme@0.5.0-next.1
  - @backstage/plugin-catalog-react@1.9.2-next.2
  - @backstage/catalog-client@1.5.0-next.1
  - @backstage/catalog-model@1.4.3
  - @backstage/core-components@0.13.9-next.2
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.1

### Patch Changes

- fa66d1b5b3: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- 2aee53bbeb: Add horizontal slider if stepper overflows
- 2b725913c1: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- a518c5a25b: Updated dependency `@react-hookz/web` to `^23.0.0`.
- Updated dependencies
  - @backstage/core-components@0.13.9-next.1
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/plugin-catalog-react@1.9.2-next.1
  - @backstage/catalog-client@1.5.0-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.0

### Patch Changes

- e516bf4da8: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3bc9: Minor updates for TypeScript 5.2.2+ compatibility
- 6cd12f277b: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- 63c494ef22: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- Updated dependencies
  - @backstage/core-plugin-api@1.8.1-next.0
  - @backstage/plugin-catalog-react@1.9.2-next.0
  - @backstage/core-components@0.13.9-next.0
  - @backstage/theme@0.5.0-next.0
  - @backstage/catalog-client@1.4.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.0

### Minor Changes

- 3fdffbb699: Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

### Patch Changes

- 6c2b872153: Add official support for React 18.
- 171a99816b: Fixed `backstage:featureFlag` in `scaffolder/next` by sorting out `manifest.steps`.
- c838da0edd: Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- 69c14904b6: Use `EntityRefLinks` with `hideIcons` property to avoid double icons
- 62b5922916: Internal theme type updates
- dda56ae265: Preserve step's time execution for a non-running task.
- 76d07da66a: Make it possible to define control buttons text (Back, Create, Review) per template
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.0
  - @backstage/core-components@0.13.8
  - @backstage/plugin-scaffolder-common@1.4.3
  - @backstage/core-plugin-api@1.8.0
  - @backstage/version-bridge@1.0.7
  - @backstage/theme@0.4.4
  - @backstage/catalog-client@1.4.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## 1.6.0-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.8-next.2
  - @backstage/plugin-catalog-react@1.9.0-next.2

## 1.6.0-next.1

### Patch Changes

- 62b5922916: Internal theme type updates
- 76d07da66a: Make it possible to define control buttons text (Back, Create, Review) per template
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.0-next.1
  - @backstage/plugin-scaffolder-common@1.4.3-next.1
  - @backstage/core-components@0.13.8-next.1
  - @backstage/catalog-client@1.4.5
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.0-next.0
  - @backstage/errors@1.2.3
  - @backstage/theme@0.4.4-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7-next.0

## 1.6.0-next.0

### Minor Changes

- 3fdffbb699: Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

### Patch Changes

- 6c2b872153: Add official support for React 18.
- Updated dependencies
  - @backstage/core-components@0.13.7-next.0
  - @backstage/plugin-scaffolder-common@1.4.3-next.0
  - @backstage/plugin-catalog-react@1.9.0-next.0
  - @backstage/core-plugin-api@1.8.0-next.0
  - @backstage/version-bridge@1.0.7-next.0
  - @backstage/theme@0.4.4-next.0
  - @backstage/catalog-client@1.4.5
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## 1.5.6

### Patch Changes

- 9a1fce352e: Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- f95af4e540: Updated dependency `@testing-library/dom` to `^9.0.0`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.5
  - @backstage/core-plugin-api@1.7.0
  - @backstage/core-components@0.13.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/version-bridge@1.0.6
  - @backstage/theme@0.4.3
  - @backstage/catalog-client@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.4.2

## 1.5.6-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.6-next.2
  - @backstage/core-plugin-api@1.7.0-next.1
  - @backstage/catalog-model@1.4.3-next.0
  - @backstage/plugin-catalog-react@1.8.5-next.2
  - @backstage/errors@1.2.3-next.0
  - @backstage/theme@0.4.3-next.0
  - @backstage/catalog-client@1.4.5-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.2-next.0

## 1.5.6-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.6-next.1
  - @backstage/plugin-catalog-react@1.8.5-next.1
  - @backstage/core-plugin-api@1.7.0-next.0
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/errors@1.2.2
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.1

## 1.5.6-next.0

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.5-next.0
  - @backstage/core-plugin-api@1.7.0-next.0
  - @backstage/core-components@0.13.6-next.0
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/errors@1.2.2
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.1

## 1.5.5

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.4
  - @backstage/core-components@0.13.5
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/core-plugin-api@1.6.0
  - @backstage/errors@1.2.2
  - @backstage/plugin-scaffolder-common@1.4.1
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5

## 1.5.5-next.3

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- Updated dependencies
  - @backstage/catalog-client@1.4.4-next.2
  - @backstage/catalog-model@1.4.2-next.2
  - @backstage/core-components@0.13.5-next.3
  - @backstage/core-plugin-api@1.6.0-next.3
  - @backstage/errors@1.2.2-next.0
  - @backstage/plugin-catalog-react@1.8.4-next.3
  - @backstage/plugin-scaffolder-common@1.4.1-next.2
  - @backstage/theme@0.4.2-next.0
  - @backstage/types@1.1.1-next.0
  - @backstage/version-bridge@1.0.5-next.0

## 1.5.5-next.2

### Patch Changes

- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.
- Updated dependencies
  - @backstage/core-components@0.13.5-next.2
  - @backstage/core-plugin-api@1.6.0-next.2
  - @backstage/plugin-catalog-react@1.8.4-next.2
  - @backstage/catalog-model@1.4.2-next.1
  - @backstage/catalog-client@1.4.4-next.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.4.1-next.1

## 1.5.5-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.4-next.1
  - @backstage/core-components@0.13.5-next.1
  - @backstage/catalog-model@1.4.2-next.0
  - @backstage/core-plugin-api@1.6.0-next.1
  - @backstage/catalog-client@1.4.4-next.0
  - @backstage/plugin-scaffolder-common@1.4.1-next.0
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4

## 1.5.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.6.0-next.0
  - @backstage/core-components@0.13.5-next.0
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.8.3-next.0
  - @backstage/plugin-scaffolder-common@1.4.0

## 1.5.2

### Patch Changes

- ba9ee98a37bd: Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.
- Updated dependencies
  - @backstage/core-components@0.13.4
  - @backstage/plugin-catalog-react@1.8.1
  - @backstage/plugin-scaffolder-common@1.4.0
  - @backstage/core-plugin-api@1.5.3
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4

## 1.5.2-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.1-next.1

## 1.5.2-next.0

### Patch Changes

- ba9ee98a37bd: Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.
- Updated dependencies
  - @backstage/core-components@0.13.4-next.0
  - @backstage/core-plugin-api@1.5.3
  - @backstage/plugin-catalog-react@1.8.1-next.0
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2

## 1.5.1

### Patch Changes

- f74a27de4d2c: Made markdown description theme-able
- Updated dependencies
  - @backstage/theme@0.4.1
  - @backstage/errors@1.2.1
  - @backstage/plugin-catalog-react@1.8.0
  - @backstage/core-components@0.13.3
  - @backstage/core-plugin-api@1.5.3
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2

## 1.5.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.0-next.2
  - @backstage/theme@0.4.1-next.1
  - @backstage/core-plugin-api@1.5.3-next.1
  - @backstage/core-components@0.13.3-next.2
  - @backstage/catalog-client@1.4.3-next.0
  - @backstage/catalog-model@1.4.1-next.0
  - @backstage/errors@1.2.1-next.0
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2-next.0

## 1.5.1-next.1

### Patch Changes

- f74a27de4d2c: Made markdown description theme-able
- Updated dependencies
  - @backstage/theme@0.4.1-next.0
  - @backstage/core-components@0.13.3-next.1
  - @backstage/core-plugin-api@1.5.3-next.0
  - @backstage/plugin-catalog-react@1.7.1-next.1

## 1.5.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/errors@1.2.1-next.0
  - @backstage/core-components@0.13.3-next.0
  - @backstage/catalog-client@1.4.3-next.0
  - @backstage/catalog-model@1.4.1-next.0
  - @backstage/core-plugin-api@1.5.2
  - @backstage/theme@0.4.0
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.7.1-next.0
  - @backstage/plugin-scaffolder-common@1.3.2-next.0

## 1.5.0

### Minor Changes

- 6b571405f806: `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- 4505dc3b4598: `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- a452bda74d7a: Fixed typescript casting bug for useTemplateParameterSchema hook
- 6b571405f806: `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

### Patch Changes

- 84a5c7724c7e: fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- cf34311cdbe1: Extract `ui:*` fields from conditional `then` and `else` schema branches.
- 2ff94da135a4: bump `rjsf` dependencies to 5.7.3
- 74b216ee4e50: Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.
- Updated dependencies
  - @backstage/core-plugin-api@1.5.2
  - @backstage/catalog-client@1.4.2
  - @backstage/core-components@0.13.2
  - @backstage/types@1.1.0
  - @backstage/theme@0.4.0
  - @backstage/plugin-catalog-react@1.7.0
  - @backstage/catalog-model@1.4.0
  - @backstage/errors@1.2.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.1

## 1.5.0-next.3

### Minor Changes

- a452bda74d7a: Fixed typescript casting bug for useTemplateParameterSchema hook

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.2-next.3
  - @backstage/catalog-model@1.4.0-next.1
  - @backstage/catalog-client@1.4.2-next.2
  - @backstage/core-plugin-api@1.5.2-next.0
  - @backstage/errors@1.2.0-next.0
  - @backstage/theme@0.4.0-next.1
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.7.0-next.3
  - @backstage/plugin-scaffolder-common@1.3.1-next.1

## 1.5.0-next.2

### Patch Changes

- cf34311cdbe1: Extract `ui:*` fields from conditional `then` and `else` schema branches.
- 2ff94da135a4: bump `rjsf` dependencies to 5.7.3
- Updated dependencies
  - @backstage/theme@0.4.0-next.1
  - @backstage/plugin-catalog-react@1.7.0-next.2
  - @backstage/core-components@0.13.2-next.2
  - @backstage/core-plugin-api@1.5.2-next.0

## 1.5.0-next.1

### Minor Changes

- 6b571405f806: `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- 4505dc3b4598: `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- 6b571405f806: `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

### Patch Changes

- 74b216ee4e50: Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.
- Updated dependencies
  - @backstage/errors@1.2.0-next.0
  - @backstage/core-components@0.13.2-next.1
  - @backstage/plugin-catalog-react@1.7.0-next.1
  - @backstage/catalog-model@1.4.0-next.0
  - @backstage/core-plugin-api@1.5.2-next.0
  - @backstage/catalog-client@1.4.2-next.1
  - @backstage/plugin-scaffolder-common@1.3.1-next.0
  - @backstage/theme@0.4.0-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4

## 1.4.1-next.0

### Patch Changes

- 84a5c7724c7e: fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- Updated dependencies
  - @backstage/catalog-client@1.4.2-next.0
  - @backstage/plugin-catalog-react@1.7.0-next.0
  - @backstage/theme@0.4.0-next.0
  - @backstage/core-components@0.13.2-next.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-model@1.3.0
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.0

## 1.4.0

### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

- Updated dependencies
  - @backstage/theme@0.3.0
  - @backstage/plugin-catalog-react@1.6.0
  - @backstage/plugin-scaffolder-common@1.3.0
  - @backstage/core-components@0.13.1
  - @backstage/catalog-client@1.4.1
  - @backstage/catalog-model@1.3.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4

## 1.4.0-next.2

### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

### Patch Changes

- Updated dependencies
  - @backstage/theme@0.3.0-next.0
  - @backstage/plugin-scaffolder-common@1.3.0-next.0
  - @backstage/core-components@0.13.1-next.1
  - @backstage/plugin-catalog-react@1.6.0-next.2
  - @backstage/core-plugin-api@1.5.1

## 1.3.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.1-next.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/plugin-catalog-react@1.6.0-next.1

## 1.3.1-next.0

### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

- Updated dependencies
  - @backstage/plugin-catalog-react@1.6.0-next.0
  - @backstage/core-components@0.13.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-client@1.4.1
  - @backstage/catalog-model@1.3.0
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.2.7

## 1.3.0

### Minor Changes

- 259d3407b9b: Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- 2cfd03d7376: To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- 48da4c46e45: `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

### Patch Changes

- 7e1d900413a: `scaffolder/next`: Bump `@rjsf/*` dependencies to 5.5.2
- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- 0435174b06f: Accessibility issues identified using lighthouse fixed.
- 7a6b16cc506: `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- 90dda42cfd2: bug: Invert `templateFilter` predicate to align with `Array.filter`
- d2488f5e54c: Add an indication that the validators are running when clicking `next` on each step of the form.
- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- 8c40997df44: Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- f84fc7fd040: Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- 34dab7ee7f8: `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- e0c6e8b9c3c: Update peer dependencies
- cf71c3744a5: scaffolder/next: Bump `@rjsf/*` dependencies to 5.6.0
- Updated dependencies
  - @backstage/core-components@0.13.0
  - @backstage/plugin-scaffolder-common@1.2.7
  - @backstage/catalog-client@1.4.1
  - @backstage/plugin-catalog-react@1.5.0
  - @backstage/theme@0.2.19
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-model@1.3.0
  - @backstage/version-bridge@1.0.4
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 1.3.0-next.3

### Patch Changes

- d2488f5e54c: Add indication that the validators are running
- 8c40997df44: Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.5.0-next.3
  - @backstage/catalog-model@1.3.0-next.0
  - @backstage/core-components@0.13.0-next.3
  - @backstage/catalog-client@1.4.1-next.1
  - @backstage/core-plugin-api@1.5.1-next.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-scaffolder-common@1.2.7-next.2

## 1.3.0-next.2

### Patch Changes

- 90dda42cfd2: bug: Invert `templateFilter` predicate to align with `Array.filter`
- 34dab7ee7f8: `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- Updated dependencies
  - @backstage/catalog-client@1.4.1-next.0
  - @backstage/core-components@0.12.6-next.2
  - @backstage/plugin-catalog-react@1.4.1-next.2
  - @backstage/core-plugin-api@1.5.1-next.1
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-scaffolder-common@1.2.7-next.1

## 1.3.0-next.1

### Patch Changes

- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @backstage/core-components@0.12.6-next.1
  - @backstage/plugin-scaffolder-common@1.2.7-next.1
  - @backstage/core-plugin-api@1.5.1-next.0
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-catalog-react@1.4.1-next.1
  - @backstage/theme@0.2.19-next.0
  - @backstage/catalog-client@1.4.0
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 1.3.0-next.0

### Minor Changes

- 259d3407b9b: Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- 2cfd03d7376: To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- 48da4c46e45: `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

### Patch Changes

- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- 7a6b16cc506: `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- f84fc7fd040: Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.2.7-next.0
  - @backstage/core-components@0.12.6-next.0
  - @backstage/plugin-catalog-react@1.4.1-next.0
  - @backstage/core-plugin-api@1.5.0
  - @backstage/catalog-client@1.4.0
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.18
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3

## 1.2.0

### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- c8d78b9ae9d: fix bug with `hasErrors` returning false when dealing with empty objects
- 9b8c374ace5: Remove timer for skipped steps in Scaffolder Next's TaskSteps
- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- d9893263ba9: scaffolder/next: Fix for steps without properties
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- cc418d652a7: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec42: Fix alignment bug for owners on `TemplateCard`
- Updated dependencies
  - @backstage/catalog-client@1.4.0
  - @backstage/core-components@0.12.5
  - @backstage/plugin-catalog-react@1.4.0
  - @backstage/errors@1.1.5
  - @backstage/core-plugin-api@1.5.0
  - @backstage/catalog-model@1.2.1
  - @backstage/theme@0.2.18
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6

## 1.2.0-next.2

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- d9893263ba9: scaffolder/next: Fix for steps without properties
- Updated dependencies
  - @backstage/core-components@0.12.5-next.2
  - @backstage/plugin-catalog-react@1.4.0-next.2
  - @backstage/core-plugin-api@1.5.0-next.2

## 1.2.0-next.1

### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

### Patch Changes

- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- Updated dependencies
  - @backstage/core-components@0.12.5-next.1
  - @backstage/errors@1.1.5-next.0
  - @backstage/catalog-client@1.4.0-next.1
  - @backstage/core-plugin-api@1.4.1-next.1
  - @backstage/theme@0.2.18-next.0
  - @backstage/plugin-catalog-react@1.4.0-next.1
  - @backstage/catalog-model@1.2.1-next.1
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6-next.1

## 1.1.1-next.0

### Patch Changes

- c8d78b9ae9: fix bug with `hasErrors` returning false when dealing with empty objects
- 928a12a9b3: Internal refactor of `/alpha` exports.
- cc418d652a: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec4: Fix alignment bug for owners on `TemplateCard`
- Updated dependencies
  - @backstage/catalog-client@1.4.0-next.0
  - @backstage/plugin-catalog-react@1.4.0-next.0
  - @backstage/core-plugin-api@1.4.1-next.0
  - @backstage/catalog-model@1.2.1-next.0
  - @backstage/core-components@0.12.5-next.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.17
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6-next.0

## 1.1.0

### Minor Changes

- a07750745b: Added `DescriptionField` field override to the `next/scaffolder`
- a521379688: Migrating the `TemplateEditorPage` to work with the new components from `@backstage/plugin-scaffolder-react`
- 8c2966536b: Embed scaffolder workflow in other components
- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- Updated dependencies
  - @backstage/core-components@0.12.4
  - @backstage/catalog-model@1.2.0
  - @backstage/theme@0.2.17
  - @backstage/core-plugin-api@1.4.0
  - @backstage/plugin-catalog-react@1.3.0
  - @backstage/catalog-client@1.3.1
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.5

## 1.1.0-next.2

### Minor Changes

- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

### Patch Changes

- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- Updated dependencies
  - @backstage/catalog-model@1.2.0-next.1
  - @backstage/core-components@0.12.4-next.1
  - @backstage/catalog-client@1.3.1-next.1
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-catalog-react@1.3.0-next.2
  - @backstage/plugin-scaffolder-common@1.2.5-next.1

## 1.1.0-next.1

### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- Updated dependencies
  - @backstage/core-components@0.12.4-next.0
  - @backstage/plugin-catalog-react@1.3.0-next.1
  - @backstage/catalog-client@1.3.1-next.0
  - @backstage/catalog-model@1.1.6-next.0
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.5-next.0

## 1.1.0-next.0

### Minor Changes

- 8c2966536b: Embed scaffolder workflow in other components

### Patch Changes

- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- Updated dependencies
  - @backstage/plugin-catalog-react@1.3.0-next.0
  - @backstage/catalog-model@1.1.6-next.0
  - @backstage/catalog-client@1.3.1-next.0
  - @backstage/plugin-scaffolder-common@1.2.5-next.0

## 1.0.0

### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

### Patch Changes

- Updated dependencies
  - @backstage/catalog-model@1.1.5
  - @backstage/plugin-scaffolder-common@1.2.4
  - @backstage/catalog-client@1.3.0
  - @backstage/plugin-catalog-react@1.2.4
  - @backstage/core-components@0.12.3
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3

## 1.0.0-next.0

### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.3.0-next.1
  - @backstage/catalog-client@1.3.0-next.2
  - @backstage/plugin-catalog-react@1.2.4-next.2
  - @backstage/catalog-model@1.1.5-next.1
  - @backstage/core-components@0.12.3-next.2
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.4-next.1
    in the review step label
- bcec60f: updated the ContextMenu, ActionsPage, OngoingTask and TemplateCard frontend components to support the new scaffolder permissions:

  - `scaffolder.task.create`
  - `scaffolder.task.cancel`
  - `scaffolder.task.read`

- Updated dependencies
  - @backstage/core-components@0.14.8
  - @backstage/core-plugin-api@1.9.3
  - @backstage/theme@0.5.6
  - @backstage/plugin-scaffolder-common@1.5.3
  - @backstage/plugin-permission-react@0.4.23
  - @backstage/plugin-catalog-react@1.12.1
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.8.7-next.3

### Patch Changes

- d44a20a: Added additional plugin metadata to `package.json`.
- fa8560e: Prevents Autocomplete dropdown from overlapping sidebar on hovering it
- Updated dependencies
  - @backstage/core-components@0.14.8-next.2
  - @backstage/plugin-scaffolder-common@1.5.3-next.1
  - @backstage/plugin-permission-react@0.4.23-next.1
  - @backstage/plugin-catalog-react@1.12.1-next.2
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-plugin-api@1.9.3-next.0
  - @backstage/theme@0.5.6-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.8.7-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.8-next.1
  - @backstage/core-plugin-api@1.9.3-next.0
  - @backstage/plugin-catalog-react@1.12.1-next.1
  - @backstage/plugin-permission-react@0.4.23-next.0
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/theme@0.5.6-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-scaffolder-common@1.5.3-next.0

## 1.8.7-next.1

### Patch Changes

- 75dcd7e: Fixing bug in `formData` type as it should be `optional` as it's possibly undefined
- 928cfa0: Fixed a typo '

## 1.8.6-next.0

### Patch Changes

- 86dc29d: Links that are rendered in the markdown in the `ScaffolderField` component are now opened in new tabs.
- Updated dependencies
  - @backstage/theme@0.5.6-next.0
  - @backstage/core-components@0.14.8-next.0
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-plugin-api@1.9.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-catalog-react@1.12.1-next.0
  - @backstage/plugin-scaffolder-common@1.5.2

## 1.8.5

### Patch Changes

- 9156654: Capturing more event clicks for scaffolder
- 0040ec2: Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.2
  - @backstage/core-components@0.14.7
  - @backstage/catalog-model@1.5.0
  - @backstage/plugin-catalog-react@1.12.0
  - @backstage/theme@0.5.4
  - @backstage/catalog-client@1.6.5

## 1.8.5-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.0-next.2
  - @backstage/core-components@0.14.7-next.2

## 1.8.5-next.1

### Patch Changes

- 9156654: Capturing more event clicks for scaffolder
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.2-next.1
  - @backstage/core-components@0.14.6-next.1
  - @backstage/plugin-catalog-react@1.11.4-next.1

## 1.8.5-next.0

### Patch Changes

- 0040ec2: Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- Updated dependencies
  - @backstage/catalog-model@1.5.0-next.0
  - @backstage/theme@0.5.4-next.0
  - @backstage/core-components@0.14.5-next.0
  - @backstage/catalog-client@1.6.5-next.0
  - @backstage/plugin-catalog-react@1.11.4-next.0
  - @backstage/plugin-scaffolder-common@1.5.2-next.0
  - @backstage/core-plugin-api@1.9.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.8.4

### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 0e692cf: Added ESLint rule `no-top-level-material-ui-4-imports` to migrate the Material UI imports.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

- Updated dependencies
  - @backstage/plugin-catalog-react@1.11.3
  - @backstage/core-components@0.14.4
  - @backstage/core-plugin-api@1.9.2
  - @backstage/theme@0.5.3
  - @backstage/version-bridge@1.0.8
  - @backstage/catalog-client@1.6.4
  - @backstage/catalog-model@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.4-next.1

### Patch Changes

- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

- Updated dependencies
  - @backstage/catalog-client@1.6.4-next.0
  - @backstage/catalog-model@1.4.5
  - @backstage/core-components@0.14.4-next.0
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.11.3-next.1
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.4-next.0
  - @backstage/catalog-client@1.6.3
  - @backstage/catalog-model@1.4.5
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.11.3-next.0
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.3

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.3
  - @backstage/core-components@0.14.3
  - @backstage/plugin-catalog-react@1.11.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.2

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.1

### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- Updated dependencies
  - @backstage/core-components@0.14.1
  - @backstage/theme@0.5.2
  - @backstage/plugin-catalog-react@1.11.0
  - @backstage/catalog-client@1.6.1
  - @backstage/catalog-model@1.4.5
  - @backstage/core-plugin-api@1.9.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.1-next.2
  - @backstage/plugin-catalog-react@1.11.0-next.2
  - @backstage/catalog-client@1.6.1-next.1
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/core-plugin-api@1.9.1-next.1
  - @backstage/theme@0.5.2-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 1.8.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.1-next.1
  - @backstage/plugin-catalog-react@1.10.1-next.1
  - @backstage/core-plugin-api@1.9.1-next.1
  - @backstage/catalog-client@1.6.1-next.0
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/theme@0.5.2-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 1.8.1-next.0

### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- Updated dependencies
  - @backstage/theme@0.5.2-next.0
  - @backstage/core-components@0.14.1-next.0
  - @backstage/plugin-catalog-react@1.10.1-next.0
  - @backstage/catalog-client@1.6.1-next.0
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/core-plugin-api@1.9.1-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.0

## 1.8.0

### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.
- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 0b0c6b6: Allow defining default output text to be shown
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- 3dff4b0: Remove unused deps
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links
- Updated dependencies
  - @backstage/plugin-catalog-react@1.10.0
  - @backstage/core-components@0.14.0
  - @backstage/catalog-model@1.4.4
  - @backstage/theme@0.5.1
  - @backstage/core-plugin-api@1.9.0
  - @backstage/catalog-client@1.6.0
  - @backstage/plugin-scaffolder-common@1.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.8.0-next.3

### Patch Changes

- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- Updated dependencies
  - @backstage/theme@0.5.1-next.1
  - @backstage/core-components@0.14.0-next.2
  - @backstage/plugin-catalog-react@1.10.0-next.3
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/core-plugin-api@1.9.0-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.2

### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links
- Updated dependencies
  - @backstage/core-components@0.14.0-next.1
  - @backstage/core-plugin-api@1.9.0-next.1
  - @backstage/plugin-catalog-react@1.10.0-next.2
  - @backstage/theme@0.5.1-next.0
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.1

### Minor Changes

- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- Updated dependencies
  - @backstage/core-components@0.14.0-next.0
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/core-plugin-api@1.8.3-next.0
  - @backstage/plugin-catalog-react@1.9.4-next.1
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.0

### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.

### Patch Changes

- 0b0c6b6: Allow defining default output text to be shown
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.4-next.0
  - @backstage/catalog-client@1.6.0-next.0
  - @backstage/plugin-scaffolder-common@1.5.0-next.0
  - @backstage/core-components@0.13.10
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.2
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.7.1

### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 0b9ce2b: Fix for a step with no properties
- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- 4016f21: Remove some unused dependencies
- d16f85f: Show first scaffolder output text by default
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.7.1-next.2

### Patch Changes

- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.3-next.2

## 1.7.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2-next.0
  - @backstage/core-components@0.13.10-next.1
  - @backstage/plugin-catalog-react@1.9.3-next.1
  - @backstage/catalog-client@1.5.2-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.7.1-next.0

### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10-next.0
  - @backstage/catalog-client@1.5.2-next.0
  - @backstage/plugin-catalog-react@1.9.3-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.1
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.7.0

### Minor Changes

- 33edf50: Added support for dealing with user provided secrets using a new field extension `ui:field: Secret`

### Patch Changes

- 670c7cc: Fix bug where `properties` is set to empty object when it should be empty for schema dependencies
- fa66d1b: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- e516bf4: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3: Minor updates for TypeScript 5.2.2+ compatibility
- 2aee53b: Add horizontal slider if stepper overflows
- 2b72591: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- 6cd12f2: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.
- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- 63c494e: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- c8908d4: Use new option from RJSF 5.15
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- 5bb5240: Fixed issue for showing undefined for hidden form items
- Updated dependencies
  - @backstage/core-plugin-api@1.8.1
  - @backstage/plugin-catalog-react@1.9.2
  - @backstage/core-components@0.13.9
  - @backstage/theme@0.5.0
  - @backstage/catalog-client@1.5.0
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.6.2-next.3

### Patch Changes

- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- c8908d4: Use new option from RJSF 5.15
- Updated dependencies
  - @backstage/core-components@0.13.9-next.3
  - @backstage/catalog-client@1.5.0-next.1
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.9.2-next.3
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.2

### Patch Changes

- 5bb5240: Fixed issue for showing undefined for hidden form items
- Updated dependencies
  - @backstage/theme@0.5.0-next.1
  - @backstage/plugin-catalog-react@1.9.2-next.2
  - @backstage/catalog-client@1.5.0-next.1
  - @backstage/catalog-model@1.4.3
  - @backstage/core-components@0.13.9-next.2
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.1

### Patch Changes

- fa66d1b5b3: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- 2aee53bbeb: Add horizontal slider if stepper overflows
- 2b725913c1: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- a518c5a25b: Updated dependency `@react-hookz/web` to `^23.0.0`.
- Updated dependencies
  - @backstage/core-components@0.13.9-next.1
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/plugin-catalog-react@1.9.2-next.1
  - @backstage/catalog-client@1.5.0-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.0

### Patch Changes

- e516bf4da8: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3bc9: Minor updates for TypeScript 5.2.2+ compatibility
- 6cd12f277b: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- 63c494ef22: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- Updated dependencies
  - @backstage/core-plugin-api@1.8.1-next.0
  - @backstage/plugin-catalog-react@1.9.2-next.0
  - @backstage/core-components@0.13.9-next.0
  - @backstage/theme@0.5.0-next.0
  - @backstage/catalog-client@1.4.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.0

### Minor Changes

- 3fdffbb699: Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

### Patch Changes

- 6c2b872153: Add official support for React 18.
- 171a99816b: Fixed `backstage:featureFlag` in `scaffolder/next` by sorting out `manifest.steps`.
- c838da0edd: Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- 69c14904b6: Use `EntityRefLinks` with `hideIcons` property to avoid double icons
- 62b5922916: Internal theme type updates
- dda56ae265: Preserve step's time execution for a non-running task.
- 76d07da66a: Make it possible to define control buttons text (Back, Create, Review) per template
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.0
  - @backstage/core-components@0.13.8
  - @backstage/plugin-scaffolder-common@1.4.3
  - @backstage/core-plugin-api@1.8.0
  - @backstage/version-bridge@1.0.7
  - @backstage/theme@0.4.4
  - @backstage/catalog-client@1.4.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## 1.6.0-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.8-next.2
  - @backstage/plugin-catalog-react@1.9.0-next.2

## 1.6.0-next.1

### Patch Changes

- 62b5922916: Internal theme type updates
- 76d07da66a: Make it possible to define control buttons text (Back, Create, Review) per template
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.0-next.1
  - @backstage/plugin-scaffolder-common@1.4.3-next.1
  - @backstage/core-components@0.13.8-next.1
  - @backstage/catalog-client@1.4.5
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.0-next.0
  - @backstage/errors@1.2.3
  - @backstage/theme@0.4.4-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7-next.0

## 1.6.0-next.0

### Minor Changes

- 3fdffbb699: Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

### Patch Changes

- 6c2b872153: Add official support for React 18.
- Updated dependencies
  - @backstage/core-components@0.13.7-next.0
  - @backstage/plugin-scaffolder-common@1.4.3-next.0
  - @backstage/plugin-catalog-react@1.9.0-next.0
  - @backstage/core-plugin-api@1.8.0-next.0
  - @backstage/version-bridge@1.0.7-next.0
  - @backstage/theme@0.4.4-next.0
  - @backstage/catalog-client@1.4.5
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## 1.5.6

### Patch Changes

- 9a1fce352e: Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- f95af4e540: Updated dependency `@testing-library/dom` to `^9.0.0`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.5
  - @backstage/core-plugin-api@1.7.0
  - @backstage/core-components@0.13.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/version-bridge@1.0.6
  - @backstage/theme@0.4.3
  - @backstage/catalog-client@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.4.2

## 1.5.6-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.6-next.2
  - @backstage/core-plugin-api@1.7.0-next.1
  - @backstage/catalog-model@1.4.3-next.0
  - @backstage/plugin-catalog-react@1.8.5-next.2
  - @backstage/errors@1.2.3-next.0
  - @backstage/theme@0.4.3-next.0
  - @backstage/catalog-client@1.4.5-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.2-next.0

## 1.5.6-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.6-next.1
  - @backstage/plugin-catalog-react@1.8.5-next.1
  - @backstage/core-plugin-api@1.7.0-next.0
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/errors@1.2.2
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.1

## 1.5.6-next.0

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.5-next.0
  - @backstage/core-plugin-api@1.7.0-next.0
  - @backstage/core-components@0.13.6-next.0
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/errors@1.2.2
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.1

## 1.5.5

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.4
  - @backstage/core-components@0.13.5
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/core-plugin-api@1.6.0
  - @backstage/errors@1.2.2
  - @backstage/plugin-scaffolder-common@1.4.1
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5

## 1.5.5-next.3

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- Updated dependencies
  - @backstage/catalog-client@1.4.4-next.2
  - @backstage/catalog-model@1.4.2-next.2
  - @backstage/core-components@0.13.5-next.3
  - @backstage/core-plugin-api@1.6.0-next.3
  - @backstage/errors@1.2.2-next.0
  - @backstage/plugin-catalog-react@1.8.4-next.3
  - @backstage/plugin-scaffolder-common@1.4.1-next.2
  - @backstage/theme@0.4.2-next.0
  - @backstage/types@1.1.1-next.0
  - @backstage/version-bridge@1.0.5-next.0

## 1.5.5-next.2

### Patch Changes

- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.
- Updated dependencies
  - @backstage/core-components@0.13.5-next.2
  - @backstage/core-plugin-api@1.6.0-next.2
  - @backstage/plugin-catalog-react@1.8.4-next.2
  - @backstage/catalog-model@1.4.2-next.1
  - @backstage/catalog-client@1.4.4-next.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.4.1-next.1

## 1.5.5-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.4-next.1
  - @backstage/core-components@0.13.5-next.1
  - @backstage/catalog-model@1.4.2-next.0
  - @backstage/core-plugin-api@1.6.0-next.1
  - @backstage/catalog-client@1.4.4-next.0
  - @backstage/plugin-scaffolder-common@1.4.1-next.0
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4

## 1.5.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.6.0-next.0
  - @backstage/core-components@0.13.5-next.0
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.8.3-next.0
  - @backstage/plugin-scaffolder-common@1.4.0

## 1.5.2

### Patch Changes

- ba9ee98a37bd: Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.
- Updated dependencies
  - @backstage/core-components@0.13.4
  - @backstage/plugin-catalog-react@1.8.1
  - @backstage/plugin-scaffolder-common@1.4.0
  - @backstage/core-plugin-api@1.5.3
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4

## 1.5.2-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.1-next.1

## 1.5.2-next.0

### Patch Changes

- ba9ee98a37bd: Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.
- Updated dependencies
  - @backstage/core-components@0.13.4-next.0
  - @backstage/core-plugin-api@1.5.3
  - @backstage/plugin-catalog-react@1.8.1-next.0
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2

## 1.5.1

### Patch Changes

- f74a27de4d2c: Made markdown description theme-able
- Updated dependencies
  - @backstage/theme@0.4.1
  - @backstage/errors@1.2.1
  - @backstage/plugin-catalog-react@1.8.0
  - @backstage/core-components@0.13.3
  - @backstage/core-plugin-api@1.5.3
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2

## 1.5.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.0-next.2
  - @backstage/theme@0.4.1-next.1
  - @backstage/core-plugin-api@1.5.3-next.1
  - @backstage/core-components@0.13.3-next.2
  - @backstage/catalog-client@1.4.3-next.0
  - @backstage/catalog-model@1.4.1-next.0
  - @backstage/errors@1.2.1-next.0
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2-next.0

## 1.5.1-next.1

### Patch Changes

- f74a27de4d2c: Made markdown description theme-able
- Updated dependencies
  - @backstage/theme@0.4.1-next.0
  - @backstage/core-components@0.13.3-next.1
  - @backstage/core-plugin-api@1.5.3-next.0
  - @backstage/plugin-catalog-react@1.7.1-next.1

## 1.5.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/errors@1.2.1-next.0
  - @backstage/core-components@0.13.3-next.0
  - @backstage/catalog-client@1.4.3-next.0
  - @backstage/catalog-model@1.4.1-next.0
  - @backstage/core-plugin-api@1.5.2
  - @backstage/theme@0.4.0
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.7.1-next.0
  - @backstage/plugin-scaffolder-common@1.3.2-next.0

## 1.5.0

### Minor Changes

- 6b571405f806: `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- 4505dc3b4598: `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- a452bda74d7a: Fixed typescript casting bug for useTemplateParameterSchema hook
- 6b571405f806: `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

### Patch Changes

- 84a5c7724c7e: fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- cf34311cdbe1: Extract `ui:*` fields from conditional `then` and `else` schema branches.
- 2ff94da135a4: bump `rjsf` dependencies to 5.7.3
- 74b216ee4e50: Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.
- Updated dependencies
  - @backstage/core-plugin-api@1.5.2
  - @backstage/catalog-client@1.4.2
  - @backstage/core-components@0.13.2
  - @backstage/types@1.1.0
  - @backstage/theme@0.4.0
  - @backstage/plugin-catalog-react@1.7.0
  - @backstage/catalog-model@1.4.0
  - @backstage/errors@1.2.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.1

## 1.5.0-next.3

### Minor Changes

- a452bda74d7a: Fixed typescript casting bug for useTemplateParameterSchema hook

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.2-next.3
  - @backstage/catalog-model@1.4.0-next.1
  - @backstage/catalog-client@1.4.2-next.2
  - @backstage/core-plugin-api@1.5.2-next.0
  - @backstage/errors@1.2.0-next.0
  - @backstage/theme@0.4.0-next.1
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.7.0-next.3
  - @backstage/plugin-scaffolder-common@1.3.1-next.1

## 1.5.0-next.2

### Patch Changes

- cf34311cdbe1: Extract `ui:*` fields from conditional `then` and `else` schema branches.
- 2ff94da135a4: bump `rjsf` dependencies to 5.7.3
- Updated dependencies
  - @backstage/theme@0.4.0-next.1
  - @backstage/plugin-catalog-react@1.7.0-next.2
  - @backstage/core-components@0.13.2-next.2
  - @backstage/core-plugin-api@1.5.2-next.0

## 1.5.0-next.1

### Minor Changes

- 6b571405f806: `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- 4505dc3b4598: `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- 6b571405f806: `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

### Patch Changes

- 74b216ee4e50: Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.
- Updated dependencies
  - @backstage/errors@1.2.0-next.0
  - @backstage/core-components@0.13.2-next.1
  - @backstage/plugin-catalog-react@1.7.0-next.1
  - @backstage/catalog-model@1.4.0-next.0
  - @backstage/core-plugin-api@1.5.2-next.0
  - @backstage/catalog-client@1.4.2-next.1
  - @backstage/plugin-scaffolder-common@1.3.1-next.0
  - @backstage/theme@0.4.0-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4

## 1.4.1-next.0

### Patch Changes

- 84a5c7724c7e: fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- Updated dependencies
  - @backstage/catalog-client@1.4.2-next.0
  - @backstage/plugin-catalog-react@1.7.0-next.0
  - @backstage/theme@0.4.0-next.0
  - @backstage/core-components@0.13.2-next.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-model@1.3.0
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.0

## 1.4.0

### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

- Updated dependencies
  - @backstage/theme@0.3.0
  - @backstage/plugin-catalog-react@1.6.0
  - @backstage/plugin-scaffolder-common@1.3.0
  - @backstage/core-components@0.13.1
  - @backstage/catalog-client@1.4.1
  - @backstage/catalog-model@1.3.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4

## 1.4.0-next.2

### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

### Patch Changes

- Updated dependencies
  - @backstage/theme@0.3.0-next.0
  - @backstage/plugin-scaffolder-common@1.3.0-next.0
  - @backstage/core-components@0.13.1-next.1
  - @backstage/plugin-catalog-react@1.6.0-next.2
  - @backstage/core-plugin-api@1.5.1

## 1.3.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.1-next.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/plugin-catalog-react@1.6.0-next.1

## 1.3.1-next.0

### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

- Updated dependencies
  - @backstage/plugin-catalog-react@1.6.0-next.0
  - @backstage/core-components@0.13.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-client@1.4.1
  - @backstage/catalog-model@1.3.0
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.2.7

## 1.3.0

### Minor Changes

- 259d3407b9b: Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- 2cfd03d7376: To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- 48da4c46e45: `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

### Patch Changes

- 7e1d900413a: `scaffolder/next`: Bump `@rjsf/*` dependencies to 5.5.2
- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- 0435174b06f: Accessibility issues identified using lighthouse fixed.
- 7a6b16cc506: `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- 90dda42cfd2: bug: Invert `templateFilter` predicate to align with `Array.filter`
- d2488f5e54c: Add an indication that the validators are running when clicking `next` on each step of the form.
- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- 8c40997df44: Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- f84fc7fd040: Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- 34dab7ee7f8: `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- e0c6e8b9c3c: Update peer dependencies
- cf71c3744a5: scaffolder/next: Bump `@rjsf/*` dependencies to 5.6.0
- Updated dependencies
  - @backstage/core-components@0.13.0
  - @backstage/plugin-scaffolder-common@1.2.7
  - @backstage/catalog-client@1.4.1
  - @backstage/plugin-catalog-react@1.5.0
  - @backstage/theme@0.2.19
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-model@1.3.0
  - @backstage/version-bridge@1.0.4
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 1.3.0-next.3

### Patch Changes

- d2488f5e54c: Add indication that the validators are running
- 8c40997df44: Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.5.0-next.3
  - @backstage/catalog-model@1.3.0-next.0
  - @backstage/core-components@0.13.0-next.3
  - @backstage/catalog-client@1.4.1-next.1
  - @backstage/core-plugin-api@1.5.1-next.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-scaffolder-common@1.2.7-next.2

## 1.3.0-next.2

### Patch Changes

- 90dda42cfd2: bug: Invert `templateFilter` predicate to align with `Array.filter`
- 34dab7ee7f8: `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- Updated dependencies
  - @backstage/catalog-client@1.4.1-next.0
  - @backstage/core-components@0.12.6-next.2
  - @backstage/plugin-catalog-react@1.4.1-next.2
  - @backstage/core-plugin-api@1.5.1-next.1
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-scaffolder-common@1.2.7-next.1

## 1.3.0-next.1

### Patch Changes

- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @backstage/core-components@0.12.6-next.1
  - @backstage/plugin-scaffolder-common@1.2.7-next.1
  - @backstage/core-plugin-api@1.5.1-next.0
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-catalog-react@1.4.1-next.1
  - @backstage/theme@0.2.19-next.0
  - @backstage/catalog-client@1.4.0
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 1.3.0-next.0

### Minor Changes

- 259d3407b9b: Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- 2cfd03d7376: To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- 48da4c46e45: `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

### Patch Changes

- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- 7a6b16cc506: `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- f84fc7fd040: Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.2.7-next.0
  - @backstage/core-components@0.12.6-next.0
  - @backstage/plugin-catalog-react@1.4.1-next.0
  - @backstage/core-plugin-api@1.5.0
  - @backstage/catalog-client@1.4.0
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.18
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3

## 1.2.0

### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- c8d78b9ae9d: fix bug with `hasErrors` returning false when dealing with empty objects
- 9b8c374ace5: Remove timer for skipped steps in Scaffolder Next's TaskSteps
- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- d9893263ba9: scaffolder/next: Fix for steps without properties
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- cc418d652a7: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec42: Fix alignment bug for owners on `TemplateCard`
- Updated dependencies
  - @backstage/catalog-client@1.4.0
  - @backstage/core-components@0.12.5
  - @backstage/plugin-catalog-react@1.4.0
  - @backstage/errors@1.1.5
  - @backstage/core-plugin-api@1.5.0
  - @backstage/catalog-model@1.2.1
  - @backstage/theme@0.2.18
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6

## 1.2.0-next.2

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- d9893263ba9: scaffolder/next: Fix for steps without properties
- Updated dependencies
  - @backstage/core-components@0.12.5-next.2
  - @backstage/plugin-catalog-react@1.4.0-next.2
  - @backstage/core-plugin-api@1.5.0-next.2

## 1.2.0-next.1

### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

### Patch Changes

- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- Updated dependencies
  - @backstage/core-components@0.12.5-next.1
  - @backstage/errors@1.1.5-next.0
  - @backstage/catalog-client@1.4.0-next.1
  - @backstage/core-plugin-api@1.4.1-next.1
  - @backstage/theme@0.2.18-next.0
  - @backstage/plugin-catalog-react@1.4.0-next.1
  - @backstage/catalog-model@1.2.1-next.1
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6-next.1

## 1.1.1-next.0

### Patch Changes

- c8d78b9ae9: fix bug with `hasErrors` returning false when dealing with empty objects
- 928a12a9b3: Internal refactor of `/alpha` exports.
- cc418d652a: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec4: Fix alignment bug for owners on `TemplateCard`
- Updated dependencies
  - @backstage/catalog-client@1.4.0-next.0
  - @backstage/plugin-catalog-react@1.4.0-next.0
  - @backstage/core-plugin-api@1.4.1-next.0
  - @backstage/catalog-model@1.2.1-next.0
  - @backstage/core-components@0.12.5-next.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.17
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6-next.0

## 1.1.0

### Minor Changes

- a07750745b: Added `DescriptionField` field override to the `next/scaffolder`
- a521379688: Migrating the `TemplateEditorPage` to work with the new components from `@backstage/plugin-scaffolder-react`
- 8c2966536b: Embed scaffolder workflow in other components
- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- Updated dependencies
  - @backstage/core-components@0.12.4
  - @backstage/catalog-model@1.2.0
  - @backstage/theme@0.2.17
  - @backstage/core-plugin-api@1.4.0
  - @backstage/plugin-catalog-react@1.3.0
  - @backstage/catalog-client@1.3.1
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.5

## 1.1.0-next.2

### Minor Changes

- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

### Patch Changes

- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- Updated dependencies
  - @backstage/catalog-model@1.2.0-next.1
  - @backstage/core-components@0.12.4-next.1
  - @backstage/catalog-client@1.3.1-next.1
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-catalog-react@1.3.0-next.2
  - @backstage/plugin-scaffolder-common@1.2.5-next.1

## 1.1.0-next.1

### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- Updated dependencies
  - @backstage/core-components@0.12.4-next.0
  - @backstage/plugin-catalog-react@1.3.0-next.1
  - @backstage/catalog-client@1.3.1-next.0
  - @backstage/catalog-model@1.1.6-next.0
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.5-next.0

## 1.1.0-next.0

### Minor Changes

- 8c2966536b: Embed scaffolder workflow in other components

### Patch Changes

- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- Updated dependencies
  - @backstage/plugin-catalog-react@1.3.0-next.0
  - @backstage/catalog-model@1.1.6-next.0
  - @backstage/catalog-client@1.3.1-next.0
  - @backstage/plugin-scaffolder-common@1.2.5-next.0

## 1.0.0

### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

### Patch Changes

- Updated dependencies
  - @backstage/catalog-model@1.1.5
  - @backstage/plugin-scaffolder-common@1.2.4
  - @backstage/catalog-client@1.3.0
  - @backstage/plugin-catalog-react@1.2.4
  - @backstage/core-components@0.12.3
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3

## 1.0.0-next.0

### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.3.0-next.1
  - @backstage/catalog-client@1.3.0-next.2
  - @backstage/plugin-catalog-react@1.2.4-next.2
  - @backstage/catalog-model@1.1.5-next.1
  - @backstage/core-components@0.12.3-next.2
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.4-next.1
    in the review step label
- bcec60f: updated the ContextMenu, ActionsPage, OngoingTask and TemplateCard frontend components to support the new scaffolder permissions:

  - `scaffolder.task.create`
  - `scaffolder.task.cancel`
  - `scaffolder.task.read`

- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.3-next.0
  - @backstage/plugin-catalog-react@1.12.1-next.0

## 1.8.6-next.0

### Patch Changes

- 86dc29d: Links that are rendered in the markdown in the `ScaffolderField` component are now opened in new tabs.
- Updated dependencies
  - @backstage/theme@0.5.6-next.0
  - @backstage/core-components@0.14.8-next.0
  - @backstage/catalog-client@1.6.5
  - @backstage/catalog-model@1.5.0
  - @backstage/core-plugin-api@1.9.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8
  - @backstage/plugin-catalog-react@1.12.1-next.0
  - @backstage/plugin-scaffolder-common@1.5.2

## 1.8.5

### Patch Changes

- 9156654: Capturing more event clicks for scaffolder
- 0040ec2: Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.2
  - @backstage/core-components@0.14.7
  - @backstage/catalog-model@1.5.0
  - @backstage/plugin-catalog-react@1.12.0
  - @backstage/theme@0.5.4
  - @backstage/catalog-client@1.6.5

## 1.8.5-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.12.0-next.2
  - @backstage/core-components@0.14.7-next.2

## 1.8.5-next.1

### Patch Changes

- 9156654: Capturing more event clicks for scaffolder
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.5.2-next.1
  - @backstage/core-components@0.14.6-next.1
  - @backstage/plugin-catalog-react@1.11.4-next.1

## 1.8.5-next.0

### Patch Changes

- 0040ec2: Updated dependency `@rjsf/utils` to `5.18.2`.
  Updated dependency `@rjsf/core` to `5.18.2`.
  Updated dependency `@rjsf/material-ui` to `5.18.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.18.2`.
- Updated dependencies
  - @backstage/catalog-model@1.5.0-next.0
  - @backstage/theme@0.5.4-next.0
  - @backstage/core-components@0.14.5-next.0
  - @backstage/catalog-client@1.6.5-next.0
  - @backstage/plugin-catalog-react@1.11.4-next.0
  - @backstage/plugin-scaffolder-common@1.5.2-next.0
  - @backstage/core-plugin-api@1.9.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.8

## 1.8.4

### Patch Changes

- abfbcfc: Updated dependency `@testing-library/react` to `^15.0.0`.
- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- cb1e3b0: Updated dependency `@testing-library/dom` to `^10.0.0`.
- 0e692cf: Added ESLint rule `no-top-level-material-ui-4-imports` to migrate the Material UI imports.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

- Updated dependencies
  - @backstage/plugin-catalog-react@1.11.3
  - @backstage/core-components@0.14.4
  - @backstage/core-plugin-api@1.9.2
  - @backstage/theme@0.5.3
  - @backstage/version-bridge@1.0.8
  - @backstage/catalog-client@1.6.4
  - @backstage/catalog-model@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.4-next.1

### Patch Changes

- 87d2eb8: Updated dependency `json-schema-library` to `^9.0.0`.
- df99f62: The `value` sent on the `create` analytics event (fired when a Scaffolder template is executed) is now set to the number of minutes saved by executing the template. This value is derived from the `backstage.io/time-saved` annotation on the template entity, if available.

  Note: the `create` event is now captured in the `<Workflow>` component. If you are directly making use of the alpha-exported `<Stepper>` component, an analytics `create` event will no longer be captured on your behalf.

- Updated dependencies
  - @backstage/catalog-client@1.6.4-next.0
  - @backstage/catalog-model@1.4.5
  - @backstage/core-components@0.14.4-next.0
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.11.3-next.1
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.4-next.0
  - @backstage/catalog-client@1.6.3
  - @backstage/catalog-model@1.4.5
  - @backstage/core-plugin-api@1.9.1
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.11.3-next.0
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.3

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.3
  - @backstage/core-components@0.14.3
  - @backstage/plugin-catalog-react@1.11.2
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.2

### Patch Changes

- e8f026a: Use ESM exports of react-use library
- Updated dependencies
  - @backstage/catalog-client@1.6.2
  - @backstage/core-components@0.14.2
  - @backstage/plugin-catalog-react@1.11.1
  - @backstage/core-plugin-api@1.9.1
  - @backstage/catalog-model@1.4.5
  - @backstage/theme@0.5.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.1

### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- Updated dependencies
  - @backstage/core-components@0.14.1
  - @backstage/theme@0.5.2
  - @backstage/plugin-catalog-react@1.11.0
  - @backstage/catalog-client@1.6.1
  - @backstage/catalog-model@1.4.5
  - @backstage/core-plugin-api@1.9.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1

## 1.8.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.1-next.2
  - @backstage/plugin-catalog-react@1.11.0-next.2
  - @backstage/catalog-client@1.6.1-next.1
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/core-plugin-api@1.9.1-next.1
  - @backstage/theme@0.5.2-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 1.8.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.14.1-next.1
  - @backstage/plugin-catalog-react@1.10.1-next.1
  - @backstage/core-plugin-api@1.9.1-next.1
  - @backstage/catalog-client@1.6.1-next.0
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/theme@0.5.2-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.1

## 1.8.1-next.0

### Patch Changes

- 930b5c1: Added 'root' and 'label' class key to TemplateCategoryPicker
- 6d649d2: Updated dependency `flatted` to `3.3.1`.
- 0cecb09: Updated dependency `@rjsf/utils` to `5.17.1`.
  Updated dependency `@rjsf/core` to `5.17.1`.
  Updated dependency `@rjsf/material-ui` to `5.17.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.1`.
- Updated dependencies
  - @backstage/theme@0.5.2-next.0
  - @backstage/core-components@0.14.1-next.0
  - @backstage/plugin-catalog-react@1.10.1-next.0
  - @backstage/catalog-client@1.6.1-next.0
  - @backstage/catalog-model@1.4.5-next.0
  - @backstage/core-plugin-api@1.9.1-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.1-next.0

## 1.8.0

### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.
- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 0b0c6b6: Allow defining default output text to be shown
- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- 3dff4b0: Remove unused deps
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links
- Updated dependencies
  - @backstage/plugin-catalog-react@1.10.0
  - @backstage/core-components@0.14.0
  - @backstage/catalog-model@1.4.4
  - @backstage/theme@0.5.1
  - @backstage/core-plugin-api@1.9.0
  - @backstage/catalog-client@1.6.0
  - @backstage/plugin-scaffolder-common@1.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.8.0-next.3

### Patch Changes

- 09cedb9: Updated dependency `@react-hookz/web` to `^24.0.0`.
- e6f0831: Updated dependency `@rjsf/utils` to `5.17.0`.
  Updated dependency `@rjsf/core` to `5.17.0`.
  Updated dependency `@rjsf/material-ui` to `5.17.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.17.0`.
- Updated dependencies
  - @backstage/theme@0.5.1-next.1
  - @backstage/core-components@0.14.0-next.2
  - @backstage/plugin-catalog-react@1.10.0-next.3
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/core-plugin-api@1.9.0-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.2

### Patch Changes

- 8fe56a8: Widen `@types/react` dependency range to include version 18.
- 2985186: Fix bug that erroneously caused a separator or a 0 to render in the TemplateCard for Templates with empty links
- Updated dependencies
  - @backstage/core-components@0.14.0-next.1
  - @backstage/core-plugin-api@1.9.0-next.1
  - @backstage/plugin-catalog-react@1.10.0-next.2
  - @backstage/theme@0.5.1-next.0
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.1

### Minor Changes

- b07ec70: Use more distinguishable icons for link (`Link`) and text output (`Description`).

### Patch Changes

- 3f60ad5: fix for: converting circular structure to JSON error
- 31f0a0a: Added `ScaffolderPageContextMenu` to `ActionsPage`, `ListTaskPage`, and `TemplateEditorPage` so that you can more easily navigate between these pages
- 82affc7: Fix issue where `ui:schema` was replaced with an empty object if `dependencies` is defined
- Updated dependencies
  - @backstage/core-components@0.14.0-next.0
  - @backstage/catalog-model@1.4.4-next.0
  - @backstage/catalog-client@1.6.0-next.1
  - @backstage/core-plugin-api@1.8.3-next.0
  - @backstage/plugin-catalog-react@1.9.4-next.1
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.5.0-next.1

## 1.8.0-next.0

### Minor Changes

- c56f1a2: Remove the old legacy exports from `/alpha`
- 11b9a08: Introduced the first version of recoverable tasks.

### Patch Changes

- 0b0c6b6: Allow defining default output text to be shown
- 6a74ffd: Updated dependency `@rjsf/utils` to `5.16.1`.
  Updated dependency `@rjsf/core` to `5.16.1`.
  Updated dependency `@rjsf/material-ui` to `5.16.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.16.1`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.4-next.0
  - @backstage/catalog-client@1.6.0-next.0
  - @backstage/plugin-scaffolder-common@1.5.0-next.0
  - @backstage/core-components@0.13.10
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.2
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.7.1

### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 0b9ce2b: Fix for a step with no properties
- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- 4016f21: Remove some unused dependencies
- d16f85f: Show first scaffolder output text by default
- Updated dependencies
  - @backstage/core-components@0.13.10
  - @backstage/plugin-scaffolder-common@1.4.5
  - @backstage/core-plugin-api@1.8.2
  - @backstage/catalog-client@1.5.2
  - @backstage/plugin-catalog-react@1.9.3
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7

## 1.7.1-next.2

### Patch Changes

- 98ac5ab: Updated dependency `@rjsf/utils` to `5.15.1`.
  Updated dependency `@rjsf/core` to `5.15.1`.
  Updated dependency `@rjsf/material-ui` to `5.15.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.1`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.3-next.2

## 1.7.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.8.2-next.0
  - @backstage/core-components@0.13.10-next.1
  - @backstage/plugin-catalog-react@1.9.3-next.1
  - @backstage/catalog-client@1.5.2-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.7.1-next.0

### Patch Changes

- c28f281: Scaffolder form now shows a list of errors at the top of the form.
- 4016f21: Remove some unused dependencies
- Updated dependencies
  - @backstage/core-components@0.13.10-next.0
  - @backstage/catalog-client@1.5.2-next.0
  - @backstage/plugin-catalog-react@1.9.3-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.1
  - @backstage/theme@0.5.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.7.0

### Minor Changes

- 33edf50: Added support for dealing with user provided secrets using a new field extension `ui:field: Secret`

### Patch Changes

- 670c7cc: Fix bug where `properties` is set to empty object when it should be empty for schema dependencies
- fa66d1b: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- e516bf4: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3: Minor updates for TypeScript 5.2.2+ compatibility
- 2aee53b: Add horizontal slider if stepper overflows
- 2b72591: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- 6cd12f2: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- a518c5a: Updated dependency `@react-hookz/web` to `^23.0.0`.
- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- 63c494e: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- c8908d4: Use new option from RJSF 5.15
- 0cbb03b: Fixing regular expression ReDoS with zod packages. Upgrading to latest. ref: https://security.snyk.io/vuln/SNYK-JS-ZOD-5925617
- 5bb5240: Fixed issue for showing undefined for hidden form items
- Updated dependencies
  - @backstage/core-plugin-api@1.8.1
  - @backstage/plugin-catalog-react@1.9.2
  - @backstage/core-components@0.13.9
  - @backstage/theme@0.5.0
  - @backstage/catalog-client@1.5.0
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.4

## 1.6.2-next.3

### Patch Changes

- 64301d3: Updated dependency `@rjsf/utils` to `5.15.0`.
  Updated dependency `@rjsf/core` to `5.15.0`.
  Updated dependency `@rjsf/material-ui` to `5.15.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.15.0`.
- c8908d4: Use new option from RJSF 5.15
- Updated dependencies
  - @backstage/core-components@0.13.9-next.3
  - @backstage/catalog-client@1.5.0-next.1
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0-next.1
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-catalog-react@1.9.2-next.3
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.2

### Patch Changes

- 5bb5240: Fixed issue for showing undefined for hidden form items
- Updated dependencies
  - @backstage/theme@0.5.0-next.1
  - @backstage/plugin-catalog-react@1.9.2-next.2
  - @backstage/catalog-client@1.5.0-next.1
  - @backstage/catalog-model@1.4.3
  - @backstage/core-components@0.13.9-next.2
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.1

### Patch Changes

- fa66d1b5b3: Fixed bug in `ReviewState` where `enum` value was displayed in step review instead of the corresponding label when using `enumNames`
- 2aee53bbeb: Add horizontal slider if stepper overflows
- 2b725913c1: Updated dependency `@rjsf/utils` to `5.14.3`.
  Updated dependency `@rjsf/core` to `5.14.3`.
  Updated dependency `@rjsf/material-ui` to `5.14.3`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.3`.
- a518c5a25b: Updated dependency `@react-hookz/web` to `^23.0.0`.
- Updated dependencies
  - @backstage/core-components@0.13.9-next.1
  - @backstage/core-plugin-api@1.8.1-next.1
  - @backstage/plugin-catalog-react@1.9.2-next.1
  - @backstage/catalog-client@1.5.0-next.0
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/theme@0.5.0-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.2-next.0

### Patch Changes

- e516bf4da8: Step titles in the Stepper are now clickable and redirect the user to the corresponding step, as an alternative to using the back buttons.
- aaa6fb3bc9: Minor updates for TypeScript 5.2.2+ compatibility
- 6cd12f277b: Updated dependency `@rjsf/utils` to `5.14.1`.
  Updated dependency `@rjsf/core` to `5.14.1`.
  Updated dependency `@rjsf/material-ui` to `5.14.1`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.1`.
- 63c494ef22: Updated dependency `@rjsf/utils` to `5.14.2`.
  Updated dependency `@rjsf/core` to `5.14.2`.
  Updated dependency `@rjsf/material-ui` to `5.14.2`.
  Updated dependency `@rjsf/validator-ajv8` to `5.14.2`.
- Updated dependencies
  - @backstage/core-plugin-api@1.8.1-next.0
  - @backstage/plugin-catalog-react@1.9.2-next.0
  - @backstage/core-components@0.13.9-next.0
  - @backstage/theme@0.5.0-next.0
  - @backstage/catalog-client@1.4.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7
  - @backstage/plugin-scaffolder-common@1.4.3

## 1.6.0

### Minor Changes

- 3fdffbb699: Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

### Patch Changes

- 6c2b872153: Add official support for React 18.
- 171a99816b: Fixed `backstage:featureFlag` in `scaffolder/next` by sorting out `manifest.steps`.
- c838da0edd: Updated dependency `@rjsf/utils` to `5.13.6`.
  Updated dependency `@rjsf/core` to `5.13.6`.
  Updated dependency `@rjsf/material-ui` to `5.13.6`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.6`.
- 69c14904b6: Use `EntityRefLinks` with `hideIcons` property to avoid double icons
- 62b5922916: Internal theme type updates
- dda56ae265: Preserve step's time execution for a non-running task.
- 76d07da66a: Make it possible to define control buttons text (Back, Create, Review) per template
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.0
  - @backstage/core-components@0.13.8
  - @backstage/plugin-scaffolder-common@1.4.3
  - @backstage/core-plugin-api@1.8.0
  - @backstage/version-bridge@1.0.7
  - @backstage/theme@0.4.4
  - @backstage/catalog-client@1.4.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## 1.6.0-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.8-next.2
  - @backstage/plugin-catalog-react@1.9.0-next.2

## 1.6.0-next.1

### Patch Changes

- 62b5922916: Internal theme type updates
- 76d07da66a: Make it possible to define control buttons text (Back, Create, Review) per template
- Updated dependencies
  - @backstage/plugin-catalog-react@1.9.0-next.1
  - @backstage/plugin-scaffolder-common@1.4.3-next.1
  - @backstage/core-components@0.13.8-next.1
  - @backstage/catalog-client@1.4.5
  - @backstage/catalog-model@1.4.3
  - @backstage/core-plugin-api@1.8.0-next.0
  - @backstage/errors@1.2.3
  - @backstage/theme@0.4.4-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.7-next.0

## 1.6.0-next.0

### Minor Changes

- 3fdffbb699: Release design improvements for the `Scaffolder` plugin and support v5 of `@rjsf/*` libraries.

  This change should be non-breaking. If you're seeing typescript issues after migrating please [open an issue](https://github.com/backstage/backstage/issues/new/choose)

  The `next` versions like `createNextFieldExtension` and `NextScaffolderPage` have been promoted to the public interface under `createScaffolderFieldExtension` and `ScaffolderPage`, so any older imports which are no longer found will need updating from `@backstage/plugin-scaffolder/alpha` or `@backstage/plugin-scaffolder-react/alpha` will need to be imported from `@backstage/plugin-scaffolder` and `@backstage/plugin-scaffolder-react` respectively.

  The legacy versions are now available in `/alpha` under `createLegacyFieldExtension` and `LegacyScaffolderPage` if you're running into issues, but be aware that these will be removed in a next mainline release.

### Patch Changes

- 6c2b872153: Add official support for React 18.
- Updated dependencies
  - @backstage/core-components@0.13.7-next.0
  - @backstage/plugin-scaffolder-common@1.4.3-next.0
  - @backstage/plugin-catalog-react@1.9.0-next.0
  - @backstage/core-plugin-api@1.8.0-next.0
  - @backstage/version-bridge@1.0.7-next.0
  - @backstage/theme@0.4.4-next.0
  - @backstage/catalog-client@1.4.5
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/types@1.1.1

## 1.5.6

### Patch Changes

- 9a1fce352e: Updated dependency `@testing-library/jest-dom` to `^6.0.0`.
- f95af4e540: Updated dependency `@testing-library/dom` to `^9.0.0`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.5
  - @backstage/core-plugin-api@1.7.0
  - @backstage/core-components@0.13.6
  - @backstage/catalog-model@1.4.3
  - @backstage/errors@1.2.3
  - @backstage/version-bridge@1.0.6
  - @backstage/theme@0.4.3
  - @backstage/catalog-client@1.4.5
  - @backstage/types@1.1.1
  - @backstage/plugin-scaffolder-common@1.4.2

## 1.5.6-next.2

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.6-next.2
  - @backstage/core-plugin-api@1.7.0-next.1
  - @backstage/catalog-model@1.4.3-next.0
  - @backstage/plugin-catalog-react@1.8.5-next.2
  - @backstage/errors@1.2.3-next.0
  - @backstage/theme@0.4.3-next.0
  - @backstage/catalog-client@1.4.5-next.0
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.2-next.0

## 1.5.6-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.6-next.1
  - @backstage/plugin-catalog-react@1.8.5-next.1
  - @backstage/core-plugin-api@1.7.0-next.0
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/errors@1.2.2
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.1

## 1.5.6-next.0

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.5-next.0
  - @backstage/core-plugin-api@1.7.0-next.0
  - @backstage/core-components@0.13.6-next.0
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/errors@1.2.2
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5
  - @backstage/plugin-scaffolder-common@1.4.1

## 1.5.5

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.4
  - @backstage/core-components@0.13.5
  - @backstage/catalog-client@1.4.4
  - @backstage/catalog-model@1.4.2
  - @backstage/core-plugin-api@1.6.0
  - @backstage/errors@1.2.2
  - @backstage/plugin-scaffolder-common@1.4.1
  - @backstage/theme@0.4.2
  - @backstage/types@1.1.1
  - @backstage/version-bridge@1.0.5

## 1.5.5-next.3

### Patch Changes

- 406b786a2a2c: Mark package as being free of side effects, allowing more optimized Webpack builds.
- b16c341ced45: Updated dependency `@rjsf/utils` to `5.13.0`.
  Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.13.0`.
  Updated dependency `@rjsf/material-ui-v5` to `npm:@rjsf/material-ui@5.13.0`.
  Updated dependency `@rjsf/validator-ajv8` to `5.13.0`.
- Updated dependencies
  - @backstage/catalog-client@1.4.4-next.2
  - @backstage/catalog-model@1.4.2-next.2
  - @backstage/core-components@0.13.5-next.3
  - @backstage/core-plugin-api@1.6.0-next.3
  - @backstage/errors@1.2.2-next.0
  - @backstage/plugin-catalog-react@1.8.4-next.3
  - @backstage/plugin-scaffolder-common@1.4.1-next.2
  - @backstage/theme@0.4.2-next.0
  - @backstage/types@1.1.1-next.0
  - @backstage/version-bridge@1.0.5-next.0

## 1.5.5-next.2

### Patch Changes

- 27fef07f9229: Updated dependency `use-immer` to `^0.9.0`.
- Updated dependencies
  - @backstage/core-components@0.13.5-next.2
  - @backstage/core-plugin-api@1.6.0-next.2
  - @backstage/plugin-catalog-react@1.8.4-next.2
  - @backstage/catalog-model@1.4.2-next.1
  - @backstage/catalog-client@1.4.4-next.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.4.1-next.1

## 1.5.5-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.4-next.1
  - @backstage/core-components@0.13.5-next.1
  - @backstage/catalog-model@1.4.2-next.0
  - @backstage/core-plugin-api@1.6.0-next.1
  - @backstage/catalog-client@1.4.4-next.0
  - @backstage/plugin-scaffolder-common@1.4.1-next.0
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4

## 1.5.4-next.0

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.6.0-next.0
  - @backstage/core-components@0.13.5-next.0
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.8.3-next.0
  - @backstage/plugin-scaffolder-common@1.4.0

## 1.5.2

### Patch Changes

- ba9ee98a37bd: Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.
- Updated dependencies
  - @backstage/core-components@0.13.4
  - @backstage/plugin-catalog-react@1.8.1
  - @backstage/plugin-scaffolder-common@1.4.0
  - @backstage/core-plugin-api@1.5.3
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4

## 1.5.2-next.1

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.1-next.1

## 1.5.2-next.0

### Patch Changes

- ba9ee98a37bd: Fixed bug in Workflow component by passing a prop `templateName` down to Stepper component.
- Updated dependencies
  - @backstage/core-components@0.13.4-next.0
  - @backstage/core-plugin-api@1.5.3
  - @backstage/plugin-catalog-react@1.8.1-next.0
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/errors@1.2.1
  - @backstage/theme@0.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2

## 1.5.1

### Patch Changes

- f74a27de4d2c: Made markdown description theme-able
- Updated dependencies
  - @backstage/theme@0.4.1
  - @backstage/errors@1.2.1
  - @backstage/plugin-catalog-react@1.8.0
  - @backstage/core-components@0.13.3
  - @backstage/core-plugin-api@1.5.3
  - @backstage/catalog-client@1.4.3
  - @backstage/catalog-model@1.4.1
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2

## 1.5.1-next.2

### Patch Changes

- Updated dependencies
  - @backstage/plugin-catalog-react@1.8.0-next.2
  - @backstage/theme@0.4.1-next.1
  - @backstage/core-plugin-api@1.5.3-next.1
  - @backstage/core-components@0.13.3-next.2
  - @backstage/catalog-client@1.4.3-next.0
  - @backstage/catalog-model@1.4.1-next.0
  - @backstage/errors@1.2.1-next.0
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.2-next.0

## 1.5.1-next.1

### Patch Changes

- f74a27de4d2c: Made markdown description theme-able
- Updated dependencies
  - @backstage/theme@0.4.1-next.0
  - @backstage/core-components@0.13.3-next.1
  - @backstage/core-plugin-api@1.5.3-next.0
  - @backstage/plugin-catalog-react@1.7.1-next.1

## 1.5.1-next.0

### Patch Changes

- Updated dependencies
  - @backstage/errors@1.2.1-next.0
  - @backstage/core-components@0.13.3-next.0
  - @backstage/catalog-client@1.4.3-next.0
  - @backstage/catalog-model@1.4.1-next.0
  - @backstage/core-plugin-api@1.5.2
  - @backstage/theme@0.4.0
  - @backstage/types@1.1.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.7.1-next.0
  - @backstage/plugin-scaffolder-common@1.3.2-next.0

## 1.5.0

### Minor Changes

- 6b571405f806: `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- 4505dc3b4598: `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- a452bda74d7a: Fixed typescript casting bug for useTemplateParameterSchema hook
- 6b571405f806: `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

### Patch Changes

- 84a5c7724c7e: fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- cf34311cdbe1: Extract `ui:*` fields from conditional `then` and `else` schema branches.
- 2ff94da135a4: bump `rjsf` dependencies to 5.7.3
- 74b216ee4e50: Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.
- Updated dependencies
  - @backstage/core-plugin-api@1.5.2
  - @backstage/catalog-client@1.4.2
  - @backstage/core-components@0.13.2
  - @backstage/types@1.1.0
  - @backstage/theme@0.4.0
  - @backstage/plugin-catalog-react@1.7.0
  - @backstage/catalog-model@1.4.0
  - @backstage/errors@1.2.0
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.1

## 1.5.0-next.3

### Minor Changes

- a452bda74d7a: Fixed typescript casting bug for useTemplateParameterSchema hook

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.2-next.3
  - @backstage/catalog-model@1.4.0-next.1
  - @backstage/catalog-client@1.4.2-next.2
  - @backstage/core-plugin-api@1.5.2-next.0
  - @backstage/errors@1.2.0-next.0
  - @backstage/theme@0.4.0-next.1
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-catalog-react@1.7.0-next.3
  - @backstage/plugin-scaffolder-common@1.3.1-next.1

## 1.5.0-next.2

### Patch Changes

- cf34311cdbe1: Extract `ui:*` fields from conditional `then` and `else` schema branches.
- 2ff94da135a4: bump `rjsf` dependencies to 5.7.3
- Updated dependencies
  - @backstage/theme@0.4.0-next.1
  - @backstage/plugin-catalog-react@1.7.0-next.2
  - @backstage/core-components@0.13.2-next.2
  - @backstage/core-plugin-api@1.5.2-next.0

## 1.5.0-next.1

### Minor Changes

- 6b571405f806: `scaffolder/next`: Provide some default template components to `rjsf` to allow for standardization and markdown descriptions
- 4505dc3b4598: `scaffolder/next`: Don't render `TemplateGroups` when there's no results in with search query
- 6b571405f806: `scaffolder/next`: provide a `ScaffolderField` component which is meant to replace some of the `FormControl` components from Material UI, making it easier to write `FieldExtensions`.

### Patch Changes

- 74b216ee4e50: Add `PropsWithChildren` to usages of `ComponentType`, in preparation for React 18 where the children are no longer implicit.
- Updated dependencies
  - @backstage/errors@1.2.0-next.0
  - @backstage/core-components@0.13.2-next.1
  - @backstage/plugin-catalog-react@1.7.0-next.1
  - @backstage/catalog-model@1.4.0-next.0
  - @backstage/core-plugin-api@1.5.2-next.0
  - @backstage/catalog-client@1.4.2-next.1
  - @backstage/plugin-scaffolder-common@1.3.1-next.0
  - @backstage/theme@0.4.0-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4

## 1.4.1-next.0

### Patch Changes

- 84a5c7724c7e: fixed refresh problem when backstage backend disconnects without any feedback to user. Now we send a generic message and try to reconnect after 15 seconds
- Updated dependencies
  - @backstage/catalog-client@1.4.2-next.0
  - @backstage/plugin-catalog-react@1.7.0-next.0
  - @backstage/theme@0.4.0-next.0
  - @backstage/core-components@0.13.2-next.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-model@1.3.0
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.3.0

## 1.4.0

### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

- Updated dependencies
  - @backstage/theme@0.3.0
  - @backstage/plugin-catalog-react@1.6.0
  - @backstage/plugin-scaffolder-common@1.3.0
  - @backstage/core-components@0.13.1
  - @backstage/catalog-client@1.4.1
  - @backstage/catalog-model@1.3.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4

## 1.4.0-next.2

### Minor Changes

- 82e10a6939c: Add support for Markdown text blob outputs from templates

### Patch Changes

- Updated dependencies
  - @backstage/theme@0.3.0-next.0
  - @backstage/plugin-scaffolder-common@1.3.0-next.0
  - @backstage/core-components@0.13.1-next.1
  - @backstage/plugin-catalog-react@1.6.0-next.2
  - @backstage/core-plugin-api@1.5.1

## 1.3.1-next.1

### Patch Changes

- Updated dependencies
  - @backstage/core-components@0.13.1-next.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/plugin-catalog-react@1.6.0-next.1

## 1.3.1-next.0

### Patch Changes

- ad1a1429de4: Improvements to the `scaffolder/next` buttons UX:

  - Added padding around the "Create" button in the `Stepper` component
  - Added a button bar that includes the "Cancel" and "Start Over" buttons to the `OngoingTask` component. The state of these buttons match their existing counter parts in the Context Menu
  - Added a "Show Button Bar"/"Hide Button Bar" item to the `ContextMenu` component

- Updated dependencies
  - @backstage/plugin-catalog-react@1.6.0-next.0
  - @backstage/core-components@0.13.0
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-client@1.4.1
  - @backstage/catalog-model@1.3.0
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4
  - @backstage/plugin-scaffolder-common@1.2.7

## 1.3.0

### Minor Changes

- 259d3407b9b: Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- 2cfd03d7376: To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- 48da4c46e45: `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

### Patch Changes

- 7e1d900413a: `scaffolder/next`: Bump `@rjsf/*` dependencies to 5.5.2
- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- 0435174b06f: Accessibility issues identified using lighthouse fixed.
- 7a6b16cc506: `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- 90dda42cfd2: bug: Invert `templateFilter` predicate to align with `Array.filter`
- d2488f5e54c: Add an indication that the validators are running when clicking `next` on each step of the form.
- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- 8c40997df44: Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- f84fc7fd040: Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- 34dab7ee7f8: `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- e0c6e8b9c3c: Update peer dependencies
- cf71c3744a5: scaffolder/next: Bump `@rjsf/*` dependencies to 5.6.0
- Updated dependencies
  - @backstage/core-components@0.13.0
  - @backstage/plugin-scaffolder-common@1.2.7
  - @backstage/catalog-client@1.4.1
  - @backstage/plugin-catalog-react@1.5.0
  - @backstage/theme@0.2.19
  - @backstage/core-plugin-api@1.5.1
  - @backstage/catalog-model@1.3.0
  - @backstage/version-bridge@1.0.4
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 1.3.0-next.3

### Patch Changes

- d2488f5e54c: Add indication that the validators are running
- 8c40997df44: Updated dependency `@rjsf/core-v5` to `npm:@rjsf/core@5.5.2`.
- Updated dependencies
  - @backstage/plugin-catalog-react@1.5.0-next.3
  - @backstage/catalog-model@1.3.0-next.0
  - @backstage/core-components@0.13.0-next.3
  - @backstage/catalog-client@1.4.1-next.1
  - @backstage/core-plugin-api@1.5.1-next.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-scaffolder-common@1.2.7-next.2

## 1.3.0-next.2

### Patch Changes

- 90dda42cfd2: bug: Invert `templateFilter` predicate to align with `Array.filter`
- 34dab7ee7f8: `scaffolder/next`: bump `rjsf` dependencies to `5.5.0`
- 2898b6c8d52: Minor type tweaks for TypeScript 5.0
- Updated dependencies
  - @backstage/catalog-client@1.4.1-next.0
  - @backstage/core-components@0.12.6-next.2
  - @backstage/plugin-catalog-react@1.4.1-next.2
  - @backstage/core-plugin-api@1.5.1-next.1
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.19-next.0
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-scaffolder-common@1.2.7-next.1

## 1.3.0-next.1

### Patch Changes

- 1e4f5e91b8e: Bump `zod` and `zod-to-json-schema` dependencies.
- e0c6e8b9c3c: Update peer dependencies
- Updated dependencies
  - @backstage/core-components@0.12.6-next.1
  - @backstage/plugin-scaffolder-common@1.2.7-next.1
  - @backstage/core-plugin-api@1.5.1-next.0
  - @backstage/version-bridge@1.0.4-next.0
  - @backstage/plugin-catalog-react@1.4.1-next.1
  - @backstage/theme@0.2.19-next.0
  - @backstage/catalog-client@1.4.0
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/types@1.0.2

## 1.3.0-next.0

### Minor Changes

- 259d3407b9b: Move `CategoryPicker` from `scaffolder` into `scaffolder-react`
  Move `ContextMenu` into `scaffolder-react` and rename it to `ScaffolderPageContextMenu`
- 2cfd03d7376: To offer better customization options, `ScaffolderPageContextMenu` takes callbacks as props instead of booleans
- 48da4c46e45: `scaffolder/next`: Export the `TemplateGroupFilter` and `TemplateGroups` and make an extensible component

### Patch Changes

- e27ddc36dad: Added a possibility to cancel the running task (executing of a scaffolder template)
- 7a6b16cc506: `scaffolder/next`: Bump `@rjsf/*` deps to 5.3.1
- f84fc7fd040: Updated dependency `@rjsf/validator-ajv8` to `5.3.0`.
- 8e00acb28db: Small tweaks to remove warnings in the console during development (mainly focusing on techdocs)
- Updated dependencies
  - @backstage/plugin-scaffolder-common@1.2.7-next.0
  - @backstage/core-components@0.12.6-next.0
  - @backstage/plugin-catalog-react@1.4.1-next.0
  - @backstage/core-plugin-api@1.5.0
  - @backstage/catalog-client@1.4.0
  - @backstage/catalog-model@1.2.1
  - @backstage/errors@1.1.5
  - @backstage/theme@0.2.18
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3

## 1.2.0

### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- c8d78b9ae9d: fix bug with `hasErrors` returning false when dealing with empty objects
- 9b8c374ace5: Remove timer for skipped steps in Scaffolder Next's TaskSteps
- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- d9893263ba9: scaffolder/next: Fix for steps without properties
- 928a12a9b3e: Internal refactor of `/alpha` exports.
- cc418d652a7: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec42: Fix alignment bug for owners on `TemplateCard`
- Updated dependencies
  - @backstage/catalog-client@1.4.0
  - @backstage/core-components@0.12.5
  - @backstage/plugin-catalog-react@1.4.0
  - @backstage/errors@1.1.5
  - @backstage/core-plugin-api@1.5.0
  - @backstage/catalog-model@1.2.1
  - @backstage/theme@0.2.18
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6

## 1.2.0-next.2

### Patch Changes

- 65454876fb2: Minor API report tweaks
- 3c96e77b513: Make scaffolder adhere to page themes by using page `fontColor` consistently. If your theme overwrites template list or card headers, review those styles.
- d9893263ba9: scaffolder/next: Fix for steps without properties
- Updated dependencies
  - @backstage/core-components@0.12.5-next.2
  - @backstage/plugin-catalog-react@1.4.0-next.2
  - @backstage/core-plugin-api@1.5.0-next.2

## 1.2.0-next.1

### Minor Changes

- 8f4d13f21cf: Move `useTaskStream`, `TaskBorder`, `TaskLogStream` and `TaskSteps` into `scaffolder-react`.

### Patch Changes

- 44941fc97eb: scaffolder/next: Move the `uiSchema` to its own property in the validation `context` to align with component development and access of `ui:options`
- Updated dependencies
  - @backstage/core-components@0.12.5-next.1
  - @backstage/errors@1.1.5-next.0
  - @backstage/catalog-client@1.4.0-next.1
  - @backstage/core-plugin-api@1.4.1-next.1
  - @backstage/theme@0.2.18-next.0
  - @backstage/plugin-catalog-react@1.4.0-next.1
  - @backstage/catalog-model@1.2.1-next.1
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6-next.1

## 1.1.1-next.0

### Patch Changes

- c8d78b9ae9: fix bug with `hasErrors` returning false when dealing with empty objects
- 928a12a9b3: Internal refactor of `/alpha` exports.
- cc418d652a: scaffolder/next: Added the ability to get the fields definition in the schema in the validation function
- d4100d0ec4: Fix alignment bug for owners on `TemplateCard`
- Updated dependencies
  - @backstage/catalog-client@1.4.0-next.0
  - @backstage/plugin-catalog-react@1.4.0-next.0
  - @backstage/core-plugin-api@1.4.1-next.0
  - @backstage/catalog-model@1.2.1-next.0
  - @backstage/core-components@0.12.5-next.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.17
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.6-next.0

## 1.1.0

### Minor Changes

- a07750745b: Added `DescriptionField` field override to the `next/scaffolder`
- a521379688: Migrating the `TemplateEditorPage` to work with the new components from `@backstage/plugin-scaffolder-react`
- 8c2966536b: Embed scaffolder workflow in other components
- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- Updated dependencies
  - @backstage/core-components@0.12.4
  - @backstage/catalog-model@1.2.0
  - @backstage/theme@0.2.17
  - @backstage/core-plugin-api@1.4.0
  - @backstage/plugin-catalog-react@1.3.0
  - @backstage/catalog-client@1.3.1
  - @backstage/errors@1.1.4
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.5

## 1.1.0-next.2

### Minor Changes

- 5555e17313: refactor `createAsyncValidators` to be recursive to ensure validators are called in nested schemas.

### Patch Changes

- b46f385eff: scaffolder/next: Implementing a simple `OngoingTask` page
- ccbf91051b: bump `@rjsf` `v5` dependencies to 5.1.0
- Updated dependencies
  - @backstage/catalog-model@1.2.0-next.1
  - @backstage/core-components@0.12.4-next.1
  - @backstage/catalog-client@1.3.1-next.1
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-catalog-react@1.3.0-next.2
  - @backstage/plugin-scaffolder-common@1.2.5-next.1

## 1.1.0-next.1

### Patch Changes

- 04f717a8e1: `scaffolder/next`: bump `react-jsonschema-form` libraries to `v5-stable`
- 346d6b6630: Upgrade `@rjsf` version 5 dependencies to `beta.18`
- Updated dependencies
  - @backstage/core-components@0.12.4-next.0
  - @backstage/plugin-catalog-react@1.3.0-next.1
  - @backstage/catalog-client@1.3.1-next.0
  - @backstage/catalog-model@1.1.6-next.0
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.5-next.0

## 1.1.0-next.0

### Minor Changes

- 8c2966536b: Embed scaffolder workflow in other components

### Patch Changes

- cbab8ac107: lock versions of `@rjsf/*-beta` packages
- d2ddde2108: Add `ScaffolderLayouts` to `NextScaffolderPage`
- Updated dependencies
  - @backstage/plugin-catalog-react@1.3.0-next.0
  - @backstage/catalog-model@1.1.6-next.0
  - @backstage/catalog-client@1.3.1-next.0
  - @backstage/plugin-scaffolder-common@1.2.5-next.0

## 1.0.0

### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

### Patch Changes

- Updated dependencies
  - @backstage/catalog-model@1.1.5
  - @backstage/plugin-scaffolder-common@1.2.4
  - @backstage/catalog-client@1.3.0
  - @backstage/plugin-catalog-react@1.2.4
  - @backstage/core-components@0.12.3
  - @backstage/core-plugin-api@1.3.0
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3

## 1.0.0-next.0

### Major Changes

- b4955ed7b9: Re-home some of the common types, components, hooks and `scaffolderApiRef` for the `@backstage/plugin-scaffolder` to this package for easy re-use across things that want to interact with the `scaffolder`.

### Patch Changes

- Updated dependencies
  - @backstage/core-plugin-api@1.3.0-next.1
  - @backstage/catalog-client@1.3.0-next.2
  - @backstage/plugin-catalog-react@1.2.4-next.2
  - @backstage/catalog-model@1.1.5-next.1
  - @backstage/core-components@0.12.3-next.2
  - @backstage/errors@1.1.4
  - @backstage/theme@0.2.16
  - @backstage/types@1.0.2
  - @backstage/version-bridge@1.0.3
  - @backstage/plugin-scaffolder-common@1.2.4-next.1
