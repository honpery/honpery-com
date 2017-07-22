#!/bin/bash

# install yarn
if !(command -v yarn >/dev/null 2>&1); then 
    sudo npm install yarn -g
fi

root=$(pwd)

modules=(api home blog)

# init modules.
yarn
for m in ${modules[@]}
    init m
do
done


# name
init () {
    if ($1); then
        path=${pwd}
    else path=${pwd}/${1}
    fi
    echo "===== init" ${m} "======"
    echo $path
    # cd $root/$m && yarn
}
