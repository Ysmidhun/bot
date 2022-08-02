FROM fusuf/whatsasena:latest

RUN git clone https://github.com/YSMIDHUN/APARNA_V3_MD /Jsl/Midhun
WORKDIR /Jsl/Midhun
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "index.js"]
