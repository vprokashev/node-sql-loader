https://nodejs.org/api/module.html#customization-hooks

```json
{
  "scripts": {
    "migrate": "node --import ./register.js /src/prepare-db.ts"
  }
}
```
```typescript
import sqlContent from './scripts/init.sql';
```
