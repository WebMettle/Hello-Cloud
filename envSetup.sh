#
# Copyright (c) 2025 by WebMettle Systems.
#
# Source (don't run) this file from the shell.
#

if [ "${NODEAPP_VERSION}" = "" ]; then
   echo "NODEAPP_VERSION not defined, exiting..."
   return
fi

if [ "${NODEAPP_ARCH}" = "" ]; then
   echo "NODEAPP_ARCH not defined, exiting..."
   return
fi

NODEBINDIR="../node-v${NODEAPP_VERSION}-${NODEAPP_ARCH}/bin"

if [ ! -d "${NODEBINDIR}" ]; then
   echo "can't find ${NODEBINDIR}, exiting..."
   return
else
   NODEBINDIR="`realpath ${NODEBINDIR}`"
fi

which node >/dev/null 2>&1

if [ $? == 1 ]; then
   echo "adding ${NODEBINDIR} to path..."
   export PATH=${NODEBINDIR}:${PATH}
fi

NODERUNTIMEVERSION="`node --version`"

if [ "${NODERUNTIMEVERSION}" != "v${NODEAPP_VERSION}" ]; then
   echo "found node ${NODERUNTIMEVERSION}, overriding PATH with ${NODEBINDIR}..."
   export PATH=${NODEBINDIR}:${PATH}
fi

echo "checking versions..."
echo "   node: `node -v`..."
echo "    npx: `npx -v`..."
echo "    npm:"
npm version | egrep -v '\{|\}' | sed 's/^  /       /'

unset NODEBINDIR NODERUNTIMEVERSION
