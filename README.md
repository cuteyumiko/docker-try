## docker build -t image-name .




## docker run -dt -p 6543:3000 --name container-name image-name




docker commit image-id
docker export container-id > fileName.tar
docker import fileName.tar 