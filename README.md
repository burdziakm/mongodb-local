# Local MongoDB with Replica Set

## Setup
```text
docker compose up --build -d
docker exec -it mongo mongosh -u user -p root --authenticationDatabase admin --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]})"
```

## Connection string:
```text
mongodb://local_user:local_pass@localhost:27017/test?authSource=test&replicaSet=rs0&directConnection=true
```