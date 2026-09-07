# Local MongoDB with Atlas Search

Uses `mongodb/mongodb-atlas-local` — includes Atlas Search (`mongot`) and manages the replica set automatically.

## Setup
```text
docker compose up -d
```

## Connection string:
```text
mongodb://local_user:local_pass@localhost:27017/dev?directConnection=true
```