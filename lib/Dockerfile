FROM quay.io/YSMIDHUN/APARNA_V3_MD:multidevice

RUN git clone https://github.com/YSMIDHUN/APARNA_V3_MD /skl/APARNA_V3_MD
WORKDIR /skl/APARNA_V3_MD
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
