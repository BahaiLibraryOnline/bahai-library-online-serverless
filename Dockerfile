FROM php:5.4-apache

RUN set -e \
    && mkdir -p /home/bahai/public_html \
    && rm -rf /var/www/html/ \
    && ln -s /home/bahai/public_html /var/www/html \
    && cd /var/www/html \
    && a2enmod rewrite \
    && docker-php-ext-configure mysql \
    && docker-php-ext-install mysql

EXPOSE 80
