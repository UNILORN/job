## Dockerのインストール
```
https://docs.docker.com/docker-for-mac/install/
```

## yarnのインストール
```
npm i -g yarn
```
## 環境構築
```
cp .env.example .env
yarn i
make build
make up
make migration
make seed
```

## codeing style
standard.jsに準拠する
https://standardjs.com/

```
make fixer
make lint
```

## テスト
```
make test
or
make nyan
```

## その他
他にもMakefileに色々あるからそれで