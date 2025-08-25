# 1. Build stage
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build

WORKDIR /src

# Copy solution file
COPY *.sln ./

# Copy projects
COPY API/API.csproj API/
COPY Application/Application.csproj Application/
COPY Domain/Domain.csproj Domain/
COPY Persistence/Persistence.csproj Persistence/

# Restore dependencies
RUN dotnet restore

# Copy all files
COPY . .

# Development
CMD ["dotnet", "watch", "--no-hot-reload", "--project", "API/API.csproj", "run", "--urls=http://0.0.0.0:5000"]