FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ysmidhun/aparna-md /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
