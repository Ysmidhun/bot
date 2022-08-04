FROM quay.io/YSMIDHUN/aparna:multidevice

RUN git clone https://github.com/YSMIDHUN/APARNA_V3_MD /skl/aparna
WORKDIR /skl/aparna
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
