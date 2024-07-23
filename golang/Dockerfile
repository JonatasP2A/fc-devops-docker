# syntax=docker/dockerfile:1

FROM golang:1.19 AS build-stage

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY go.mod ./
RUN go mod download

# Copy the source code. Note the slash at the end, as explained in
# https://docs.docker.com/reference/dockerfile/#copy
COPY *.go ./

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o /multi-stage-build-golang



FROM scratch

WORKDIR /

COPY --from=build-stage /multi-stage-build-golang /multi-stage-build-golang

EXPOSE 8080

ENTRYPOINT ["/multi-stage-build-golang"]