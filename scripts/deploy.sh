dropshippy=$(docker ps -aq --filter "name=dropshippy")

isAppRunning=$(docker ps -aq --filter "name=dropshippy" --filter status=running)

if [ "$isAppRunning" != "" ]; then
    docker stop $dropshippy
    docker rm $dropshippy
fi

docker login -u $1 -p $2 registry.gitlab.com
docker run --name dropshippy -d --restart on-failure --network brandly-demo registry.gitlab.com/dnthanh1298/dropshippy
docker image prune -f