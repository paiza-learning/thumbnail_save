#! /bin/sh

set -e

SCRIPT_DIR=$(cd "$(dirname "$0")"; pwd)
cd $SCRIPT_DIR

FILE_PATH="/Applications/Adobe Photoshop 2022/Presets/Scripts"

if [[ -d $FILE_PATH ]]; then
  sudo cp save.jsx "${FILE_PATH}"
  echo "${FILE_PATH}にコピーしました。"
else
    echo "${FILE_PATH}が見つかりませんでした。"
fi
