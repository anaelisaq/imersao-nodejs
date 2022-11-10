`comandos no terminal`

*senhas fictícias para fins de estudo*

docker ps (para verificar funcionamento docker)

## -------------- baixar a imagem postgres:

docker run \
    --name postgres \
    -e POSTGRES_USER=anaelisaq \
    -e POSTGRES_PASSWORD=senhasecreta \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

linhas de comando:
-e : variáveis de ambiente
-p : porta | local:remota
-d : rodar em 2º plano
--link : conceder permissão
--eval:


docker ps (listar as imagens)
winpty docker exec -it postgres //bin//bash (entrar no container)

psql (rodar a imagenm)

## -------------- criar painel administrativo:

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d \
    adminer

docker ps

## -------------- baixar a imagem mongodb:
docker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    -d \
    mongo:4 

docker run \
    --name mongoclient \
    -p 3000:3000 \
    -e MONGO_URL="mongodb://admin:admin@mongodb:27017/admin" \
    --link mongodb:mongodb \
    -d \
    mongoclient/mongoclient

winpty docker exec -it mongodb \
    mongo --host localhost -u admin -p admin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser({user: 'adminuser', pwd: 'senhasecreta', role: [{role: 'readWrite', db: 'herois'}]})
