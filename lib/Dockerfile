FROM quay.io/MR-DUMIDU/QUEEN-NICKY-MD
RUN git clone https://github.com/MR-DUMIDU/QUEEN-NICKY-MD /root/MR-DUMIDU
WORKDIR /root/MR-DUMIDU/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
