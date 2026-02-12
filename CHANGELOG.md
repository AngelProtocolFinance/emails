# @better-giving/react-emails

## 2.0.0

### Major Changes

- rename fund opt out props

## 1.4.1

### Patch Changes

- Replace social link icons with text-only links for better email client compatibility

## 1.4.0

### Minor Changes

- fund-mgmt-template, new layout

## 1.3.3

### Patch Changes

- Remove Preview component to fix AWS Cognito email validation

  - Remove `preview_text` prop from EmailLayout (was using @react-email Preview component)
  - The Preview component added invisible Unicode characters that violated Cognito's email template regex
  - Update email previews to import `template` directly from template files
  - Include `emails` directory in TypeScript type checking

## 1.3.2

### Patch Changes

- Remove templates barrel file and simplify exports

## 1.3.1

### Patch Changes

- Relax @react-email/components peer dependency version constraint

## 1.3.0

### Minor Changes

- Add Cognito verification email templates (signup, forgot-password, resend-code)

## 1.2.1

### Patch Changes

- Streamline template prop naming conventions for consistency

## 1.2.0

### Minor Changes

- Flatten templates directory structure and simplify exports

  - Flatten nested template directories (admin, banking, donation, registration) into a single templates folder
  - Remove intermediate index.ts barrel files
  - Simplify component exports from src/index.ts
  - Update types with streamlined interface definitions

## 1.1.1

### Patch Changes

- ci

## 1.1.0

### Minor Changes

- type exports prepended

## 1.0.1

### Patch Changes

- add react email components as peer dep
