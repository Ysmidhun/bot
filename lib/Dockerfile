FROM quay.io/afx-abu/multi-beta

RUN git clone https://github.com/Ysmidhun/aparna-md /skl/Aparna
WORKDIR /skl/Aparna
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines
CMD ["node", "index.js"]
