FROM node:8.9.0

# Java Version
ENV  JAVA_VERSION=9.0.1 \
     JAVA_UPDATE=ea \
     JAVA_BUILD=11  \
     JAVA_HOME=/usr/lib/jvm/current-java

# JRE http://download.oracle.com/otn-pub/java/jdk/9.0.1+11/jre-9.0.1_linux-x64_bin.tar.gz

RUN cd /tmp && wget --header "Cookie: oraclelicense=accept-securebackup-cookie;" \
        "http://download.oracle.com/otn-pub/java/jdk/${JAVA_VERSION}+${JAVA_BUILD}/jre-${JAVA_VERSION}_linux-x64_bin.tar.gz" && \
     tar xzf "jre-${JAVA_VERSION}_linux-x64_bin.tar.gz" && \
     mkdir -p /usr/lib/jvm && mv "/tmp/jre-${JAVA_VERSION}" "/usr/lib/jvm/java-${JAVA_VERSION}-oracle"  && \
     ln -s "java-${JAVA_VERSION}-oracle" $JAVA_HOME && \
     ln -s $JAVA_HOME/bin/java /usr/bin/java && \
     rm -rf $JAVA_HOME/*.txt && \
     rm -rf $JAVA_HOME/*.html
#     apk del wget ca-certificates curl && \
#     rm /tmp/* /var/cache/apk/*

EXPOSE 8080

ADD ./package.json .

RUN npm -g update npm
RUN npm install
RUN npm update

# Install Google Chrome
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -y --allow-unauthenticated google-chrome-stable

ADD ./ .

RUN npm run test
